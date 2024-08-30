

import { useEffect, useState } from 'react';
import FoodCard from '../AllFood/FoodCard';


const TopFood = () => {
 
    //const loadedSpots = useLoaderData();
    const [food, setFood] = useState([]);
    const [load, setLoad] = useState(true);
      useEffect(() => { 
        
        fetch('https://resturant-server-liart.vercel.app/food')
            .then(res => res.json())
            .then(data => {
                setLoad(false);
                setFood(data)});
      }, [])
    
    return (
       <> 
       
       <div className=' m-2 md:m-20'>
      <h1 className='text-7xl h-20 mb-6 text-center mt-10 text-green-500 font-bold'>Top Food</h1>
      
     { load ? (<div className="w-full h-20 flex justify-center items-center"><span className="loading bg-white loading-dots w-20"></span></div>) :
     ( <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        { food?.length > 6 ? food ?.slice(0, 6)
          .map(food => <FoodCard
            key={food._id}
            food={food}
            
            setFood={setFood}
          ></FoodCard>)
          : food?.map(food => <FoodCard
            key={food._id}
            food={food}
            
            setFood={setFood}
          ></FoodCard>)
        } 
      </div>
    )   
}
    </div>
    
       </>
    );
};

export default TopFood;