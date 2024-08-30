const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors({
    origin: [
         'http://localhost:5173',
          'https://resturant-7f83a.web.app'
    ],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// mongoDB

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aconex0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client .connect()
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

// middlewares 
// middlewares 
const logger = (req, res, next) =>{
    console.log('log: info', req.method, req.url);
    next();
}

const verifyToken = (req, res, next) =>{
    const token = req?.cookies?.token;
    // console.log('token in the middleware', token);
    // no token available 
    if(!token){
        return res.status(401).send({message: 'unauthorized access'})
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
        if(err){
            return res.status(401).send({message: 'unauthorized access'})
        }
        req.user = decoded;
        next();
    })
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
   // await client.connect();

   const foodCollection = client.db('resturantDB').collection('food');
   const purchaseCollection = client.db('resturantDB').collection('purchase');
   const galleryCollection = client.db('resturantDB').collection('gallery');
  // const countryCollection = client.db('tourismDB').collection('country');
    

// auth related api
app.post('/jwt', logger, async (req, res) => {
    const user = req.body;
    console.log('user for token', user);
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
        httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    })
        .send({ success: true });
})

app.post('/logout', (req, res) => {
    res
        .clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 0,
        })
        .send({ success: true })
})


// food related api

// read
app.get('/food', async (req, res) => {
    
    const cursor = foodCollection.find().sort({ count: -1 });
    const result = await cursor.toArray();
    res.send(result);
})

// search related api

app.get('/search', async (req, res) => {
    const search = req.query.search
    const sort = req.query.sort
   // console.log(2,req.query);
   // console.log(1,search);
    let query = {
        foodname: { $regex: search, $options: 'i' },
      }
    //  let options = {}
      if (sort === 'asc'){
        
        const result = await foodCollection.find().sort({ price: 1  });
      //  options = { sort: { price: sort === 'asc' ? 1 : -1 } }
      res.send(result);
    } else {
    const result = await foodCollection.find(query).toArray();
    res.send(result);
}
})
app.get('/food', logger, verifyToken, async (req, res) => {
    console.log(req.query.email);
    console.log('token owner info', req.user)
    if(req.user.email !== req.query.email){
        return res.status(403).send({message: 'forbidden access'})
    }
    let query = {};
    if (req.query?.email) {
        query = { email: req.user.email }
    }
    const result = await foodCollection.find(query).toArray();
    res.send(result);
})


// create
app.post('/food', async (req, res) => {
    const newSpot = req.body;
    console.log(newSpot);
    const result = await foodCollection.insertOne(newSpot);
    res.send(result);
})

 // update
 app.put('/food/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) }
    const options = { upsert: true };
    const updatedFood = req.body;

    const food = {
        $set: {
            
            price: updatedFood.price,
            image: updatedFood.image,
            origin: updatedFood.origin,
            foodname: updatedFood.foodname,
            spotName: updatedFood.spotName,
            category: updatedFood.category,
            quantity: updatedFood.quantity,
            description: updatedFood.description
        }
    }

    const result = await foodCollection.updateOne(filter, food, options);
    res.send(result);
})
// increase count api
app.put('/count/:id', async (req, res) => {
    const id = req.params.id;
    const update = {
        $inc: { count: 1 },
        
      }
      const foodQuery = { _id: new ObjectId(id) }
      const updateCount = await foodCollection.updateOne(foodQuery, update)
      console.log(updateCount)
      res.send(updateCount);
})
// decrease quantity api
app.put('/decrease/:id', async (req, res) => {
    const id = req.params.id;
    const purchase = req.body.purchase;
    const quantity = req.body.quantity;
      const foodQuery = { _id: new ObjectId(id) }
      const options = { upsert: true }
      let newValue =parseInt(quantity)- parseInt(purchase);
      let value = newValue.toString();
      console.log(value);
    const update = {
        $set: {
          quantity: value 
        },
    }
      const updateCount = await foodCollection.updateOne(foodQuery, update, options)
      console.log(updateCount)
      res.send(updateCount);
})

// myadd related api

app.get('/myadd',logger,verifyToken, async (req, res) => {
    // console.log(req.query.email);
           //  console.log('token owner info', req.user)
             if(req.user.email !== req.query.email){
                 return res.status(403).send({message: 'forbidden access'})
             }
             let query = {};
             if (req.query?.email) {
                 query = { email: req.query.email }
             }    
     const cursor = foodCollection.find();
     const result = await cursor.toArray();
     res.send(result);
 })

// purchase related api

app.post('/purchase/:id', async (req, res) => {
    const newPurchase = req.body;
    console.log(newPurchase);
    const result = await purchaseCollection.insertOne(newPurchase);
    res.send(result);
       res.send(result)
})

app.get('/purchase',logger,verifyToken, async (req, res) => {
  //  console.log(req.query.email);
          //  console.log('token owner info', req.user)
            if(req.user.email !== req.query.email){
                return res.status(403).send({message: 'forbidden access'})
            }
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
            }    
    const cursor = purchaseCollection.find();
    const result = await cursor.toArray();
    res.send(result);
})

// delete
app.delete('/purchase/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await purchaseCollection.deleteOne(query);
    res.send(result);
})
// detail
app.get('/food/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await foodCollection.findOne(query);
    res.send(result);
})

// gallery related api

app.get('/gallery',logger,verifyToken, async (req, res) => {
   // console.log(req.query.email);
          //  console.log('token owner info', req.user)
            if(req.user.email !== req.query.email){
                return res.status(403).send({message: 'forbidden access'})
            }
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
            }    
    const cursor = galleryCollection.find();
    const result = await cursor.toArray();
    res.send(result);
})

app.post('/gallery', async (req, res) => {
    const newGallery = req.body;
    console.log(newGallery);
    const result = await galleryCollection.insertOne(newGallery);
    res.send(result);
})

    // Send a ping to confirm a successful connection
  //  await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('resturant server is running')
})

app.listen(port, () => {
    console.log(`resturant is running on port: ${port}`)
})
