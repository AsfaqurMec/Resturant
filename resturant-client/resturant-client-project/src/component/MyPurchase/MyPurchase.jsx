/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useState, useEffect } from "react";
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Link } from "react-router-dom";
  import Swal from "sweetalert2";
  import { Helmet } from "react-helmet";
  import useAxiosSecure from "../../hook/useAxiosSecure";

const MyPurchase = () => {
    
    const axiosSecure = useAxiosSecure();
   // const loads = useLoaderData();
    const { user } = useAuth() || {};
    const [foods, setFoods] = useState([]);
    const url = `/purchase?email=${user?.email}`;
    useEffect(() => {
        

        axiosSecure.get(url)
        .then(res => setFoods(res.data))

    }, [url, axiosSecure]);

    const filter = foods.filter(food => food.email === user.email);
    const {_id, name, price, foodName, quantity , date ,email } = foods;

    const handleDelete = id => {
        // console.log(id);
         // make sure user is confirmed to delete
         Swal.fire({
             title: 'Are you sure?',
             text: "You won't be able to revert this!",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Yes, delete it!'
         })
         .then((result) => {
             if (result.isConfirmed) {
 
         fetch(`https://resturant-server-liart.vercel.app/purchase/${id}`, {
             method: 'DELETE'
         })
             .then(res => res.json())
             .then(data => {
                 if (data.deletedCount > 0) {
                   //  console.log('deleted successfully');
                   Swal.fire(
                     'Deleted!',
                     'Your purchase has been deleted.',
                     'success'
                 )
                      // toast.success('deleted successfully');
                     // remove the user from the UI
                     const remainingPutchase = foods.filter(food => food._id !== id);
                     setFoods(remainingPutchase);
                 }
             })
         }
     })


     
     }
    return (
        <>
        <Helmet>
  <title>DineEase | Purchase</title>
</Helmet>
<h1 className="text-center text-white text-4xl font-semibold mb-6">My Purchase Food</h1>
        <div className="overflow-x-auto min-h-[46vh]">
            <table className="table rounded-none bg-[#c3b8cbc1]">
                {/* head */}
                <thead>
                    <tr>
                        
                        <th className="px-[5px] md:px-4 text-stone-950 text-lg font-bold">Food Name</th>
                        <th className="px-[5px] md:px-4 text-stone-950 text-lg font-bold">Date</th>
                        <th className="px-[5px] md:px-4 text-stone-950 text-lg font-bold">Price</th>
                        <th className=" text-stone-950 text-lg font-bold">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                      filter.map(food => 
                        <tr key={food._id}>
                        
                        <td className="px-[5px] md:px-4 font-bold text-lg">{food.foodName}</td>
                        <td className="px-[5px] md:px-4 font-bold text-lg">{food.date}</td>
                        <td className="px-[5px] md:px-4 font-bold text-lg">{food.price}</td>
                        <td className="flex flex-col  gap-2 md:flex-row">
                        <button  onClick={() => handleDelete(food._id)}
                                className="btn btn-error">Delete</button>        
                            

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

export default MyPurchase;