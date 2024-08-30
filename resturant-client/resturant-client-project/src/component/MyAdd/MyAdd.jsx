/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useState, useEffect } from "react";
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Link } from "react-router-dom";
  import { Helmet } from "react-helmet";
  import useAxiosSecure from "../../hook/useAxiosSecure";
const MyAdd = () => {
  
  //const loads = useLoaderData();
   // console.log(loads);
   const axiosSecure = useAxiosSecure();
    const { user } = useAuth() || {};
    const [foods, setFoods] = useState([]);
    const url = `/myadd?email=${user?.email}`;
    useEffect(() => {
        

      axiosSecure.get(url)
      .then(res => setFoods(res.data))

  }, [url, axiosSecure]);
  const filter = foods.filter(food => food.email === user.email);
  // setSpots(filter);
  // console.log(filter);
  const { name, price, image, origin, foodname, catagory, quantity , description ,email } = foods;

  


    return (
        <>
        <Helmet>
  <title>DineEase | MyAdd</title>
</Helmet>
<h1 className="text-center text-white text-3xl font-semibold mb-6">My Added Food</h1>
        <div className="overflow-x-auto min-h-[46vh]">
            <table className="table rounded-none bg-[#c3b8cbc1]">
                {/* head */}
                <thead>
                    <tr>
                        
                        <th className="px-[5px] md:px-4 text-stone-950 text-lg font-bold">Food Name</th>
                        <th className="px-[5px] md:px-4 text-stone-950 text-lg font-bold">Origin</th>
                        <th className="px-[5px] md:px-4 text-stone-950 text-lg font-bold">Price</th>
                        <th className="px-[5px] md:px-4 text-stone-950 text-lg font-bold">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                      filter.map(food => 
                        <tr key={food._id}>
                        
                        <td className="px-[5px] md:px-4 font-bold text-lg">{food.foodname}</td>
                        <td className="px-[5px] md:px-4 font-bold text-lg">{food.origin}</td>
                        <td className="px-[5px] md:px-4 font-bold text-lg">{food.price}</td>
                        <td className="flex flex-col  gap-2 md:flex-row">
                        <Link to={`update/${food._id}`}>
                           <button
                                className="btn md:mr-2 btn-success">Update</button>
                        </Link>

                        </td>
                    </tr>
                      )
                  }
                </tbody>
            </table>
        </div>
        <ToastContainer></ToastContainer>
        </>
    );
};

export default MyAdd;