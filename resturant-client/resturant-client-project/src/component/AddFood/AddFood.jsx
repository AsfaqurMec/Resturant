/* eslint-disable no-undef */
import useAuth from "../../hook/useAuth";
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from "react-helmet";
const AddFood = () => {

    const { user } = useAuth() || {};
    
   // console.log(user.email);
   // console.log(user);
    const handleAddFood = (e) => {
      e.preventDefault();
     
      const name = e.target.name.value;
      const price = e.target.price.value;
      const image = e.target.image.value;
      const origin = e.target.origin.value;
      const email = user?.email;
      
      const foodname = e.target.foodname.value;
      const category = e.target.foodcatagory.value;
      const quantity = e.target.quantity.value;
      
      const description = e.target.description.value;
  
     //  console.log(name, price, image, type)
  
      const info = { name, price, image, origin, foodname, category, quantity , description ,email, count: 0 };
      
      fetch("https://resturant-server-liart.vercel.app/food", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(info)
      })
        .then(res => res.json())
        .then(data => {
          if (data?.insertedId) {
          toast.success('added successfully');
          
        }
      })
      e.target.reset();
    };

    return (
        <>
        <Helmet>
  <title>DineEase | AddFood</title>
</Helmet>
        <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border dark:bg-[#3b2843d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#49ff52]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#49ff49] mr-2">
                 Add 
              </span>
              Your Food
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddFood}>
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
              />
            

<label className="block mb-2 mt-4 dark:text-white" htmlFor="quantity">
               Quantity
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="number"
                placeholder="Enter Quantity"
                id="quantity"
                name="quantity"
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
              />

            </div>
            
            {/* Right side */}
            <div className="flex-1">

            <label className="block mb-2 dark:text-white" htmlFor="name">
               User Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User Name"
                id="name"
                name="name"
                defaultValue={user?.displayName}
              />

<label className="block mb-2 mt-4 dark:text-white" htmlFor="email">
               User Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User email" 
                id="email"
                name="email"
                defaultValue={user?.email}
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
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="number"
                placeholder="Price"
                id="price"
                name="price"
              />


            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#3158ab]  bg-[#2f983b] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Food"
          />
          
        </form>
      </div>
    
    </div>
    <ToastContainer></ToastContainer>
    </>
    );
};

export default AddFood;