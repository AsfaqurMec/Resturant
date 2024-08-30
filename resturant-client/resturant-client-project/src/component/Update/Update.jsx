/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from "react-helmet";
const Update = () => {
    const food = useLoaderData();
    const { user } = useAuth() || {};
    const  {_id, name, price, image, origin, foodname, category, quantity , description ,email } = food;
//console.log(food);
    const handleUpdate = (e) => {
        e.preventDefault();
    
      //  const name = e.target.name.value;
      const name = user?.displayName;
      const price = e.target.price.value;
      const image = e.target.image.value;
      const origin = e.target.origin.value;
      const email = user?.email;
      
      const foodname = e.target.foodname.value;
      const category = e.target.foodcatagory.value;
      const quantity = e.target.quantity.value;
      
      const description = e.target.description.value;
    
       //  console.log(name, price, image, type)
    
        const updatedFood = {_id, name, price, image, origin, foodname, category, quantity , description ,email};
        
 // send data to the server
 fetch(`https://resturant-server-liart.vercel.app/food/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updatedFood)
   })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
        toast.success('Updated successfully');
       })
       
    };

    return (
        <>
        <Helmet>
  <title>DineEase | Update</title>
</Helmet>
        <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border dark:bg-[#3b2843d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C] mr-2">
                 Update 
              </span>
              Your Food
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col md:flex-row gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="foodname">
               Food Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Food Name"
                id="foodname"
                name="foodname"
                defaultValue={foodname}
              />

<label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="foodcatagory"
              >
                Food Catagory
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Food Catagory"
                id="foodcatagory"
                name="foodcatagory"
                defaultValue={category}
              />
            

<label className="block mb-2 mt-4 dark:text-white" htmlFor="quantity">
               Quantity
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Quantity"
                id="quantity"
                name="quantity"
                defaultValue={quantity}
              />

<label className="block mb-2 mt-1 dark:text-white" htmlFor="description">
                Short Description
              </label>
              <input
                className="w-full h-20 p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter short description"
                id="description"
                name="description"
                defaultValue={description}
              />

            </div>
            
            {/* Right side */}
            <div className="flex-1">

            <label className="block mb-2 dark:text-white" htmlFor="user-name">
               User Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User Name"
                id="user-name"
                name="user-name"
                defaultValue={user?.displayName}
              />

<label className="block mb-2 mt-4 dark:text-white" htmlFor="user-email">
               User Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User email" 
                id="user-email"
                name="user-email"
                defaultValue={email}
              />

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
                defaultValue={image}
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="origin">
                Food Origin
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Food Origin"
                id="origin"
                name="origin"
                defaultValue={origin}
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

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Food"
          />
          
        </form>
      </div>
    
    </div>
    <ToastContainer></ToastContainer>
    </>
    );
};

export default Update;
