/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import useAuth from "../../hook/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const Purchase = () => {
    const food = useLoaderData();
    const navigate = useNavigate();
  //  console.log(food);
    const { user } = useAuth() || {};
  //  console.log(user.email);
   const  { _id, foodname, category, image, quantity, price, origin, description,email } = food;
   // console.log(_id);
let time = new Date();
 const options = { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
 let timeString = time.toLocaleTimeString('en-US', options);
  let day =new Date().toDateString();

  let current =day+" "+timeString;
//console.log(current);
    //console.log(today);
    const handleAddPurchase = (e) => {
      e.preventDefault();
    
      const name = user?.displayName;
      const price = e.target.price.value;
      const quantity = e.target.quantity.value;
      const purchase = e.target.purchase.value
      const email = user?.email;
      
      const foodName = e.target.foodName.value;
      const date = day+" "+timeString;

  
     //  console.log(name, price, image, type)
  
      const info = { name, price, foodName, quantity, purchase, email, date };
      
      if((quantity-purchase)<0){
        toast.error('Can Not buy more than available');
        return;
      }


      fetch(`https://resturant-server-liart.vercel.app/purchase/${_id}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(info)
      })
        .then(res => res.json())
        .then(data => {
         // toast.success('purchase successfully');
          if (data?.insertedId) {
            
            toast.success('purchase successfully');
          
        }
      })
      fetch(`https://resturant-server-liart.vercel.app/count/${_id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        
      })
      fetch(`https://resturant-server-liart.vercel.app/decrease/${_id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(info)
       })
      .then(res => res.json())

      setTimeout(()=>{navigate('/order')}, "5500");
      e.target.reset();
    };
    
    
    return (
        <>
        <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border bg-[#090909e9]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C] mr-2">
                 Purchase 
              </span>
              Your Food
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddPurchase}>
        <div className="flex flex-col md:flex-row gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
               Food Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Food Name"
                id="foodName"
                name="foodName"
                defaultValue={foodname}
              />


            

<label className="block mb-2 mt-4 dark:text-white" htmlFor="quantity">
              Available Quantity
              </label>
              <input
                className="w-full p-2 border rounded-md font-semibold text-white  focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Quantity"
                id="quantity"
                name="quantity"
                defaultValue={quantity}
                disabled
              />
<label className="block mb-2 mt-4 dark:text-white" htmlFor="purchase">
               Purchase
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="number"
                placeholder="Enter Quantity"
                id="purchase"
                name="purchase"
                
              />
<label className="block mb-2 mt-4 dark:text-white" htmlFor="date">
              Buying Date
              </label>
              <input
                className="w-full p-2 border text-white font-semibold rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter date"
                id="date"
                name="date"
                defaultValue={current}
                disabled
              />

            </div>
            
            {/* Right side */}
            <div className="flex-1">

            <label className="block mb-2 dark:text-white" htmlFor="user-name">
               User Name
              </label>
              <input
                className="w-full p-2 border text-white font-semibold rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User Name"
                id="user-name"
                name="user-name"
                defaultValue={user?.displayName}
                disabled
              />

<label className="block mb-2 mt-4 dark:text-white" htmlFor="user-email">
               User Email
              </label>
              <input
                className="w-full p-2 border text-white font-semibold rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User email" 
                id="user-email"
                name="user-email"
                defaultValue={user?.email}
                disabled
              />

              
              

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="text"
                placeholder="Price"
                id="price"
                name="price"
                defaultValue={price}
              />


            </div>
          </div>
            
            {
              quantity == 0 ? <h2 className="text-red-500 font-bold text-xl justify-center flex my-3">Not available</h2> : ''
            }
          <input disabled={quantity == 0}
            className="px-4 w-full py-2 mt-4 rounded  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Purchase"
          />
          
        </form>
      </div>
    
    </div>
    <ToastContainer></ToastContainer>
    </>
    );
};

export default Purchase;