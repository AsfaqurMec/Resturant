/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";


const Gallery = () => {
    
const axiosSecure = useAxiosSecure();
const { user } = useAuth() || {};

    const [gallery, setGallery] = useState([])

    const url = `/gallery?email=${user?.email}`;

    useEffect(() => {
        

        axiosSecure.get(url)
        .then(res => setGallery(res.data))

    }, [url, axiosSecure]);


    const handleAdd = (e) => {
        e.preventDefault();
    
      //  const name = e.target.name.value;
      const name = user?.displayName;
      
      const image = e.target.image.value;
  
      const description = e.target.des.value;
    
       //  console.log(name, price, image, type)
    
        const add = { name, image, description};
        
 // send data to the server
 fetch(`https://resturant-server-liart.vercel.app/gallery`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(add)
   })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
        toast.success('Added successfully');
       })
       
    };



    return (
        <>
        <div className="w-full">
           <div className='w-full mb-5 h-32 bg-slate-600 bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/0j6mW6M/chinatown-bangkok.jpg")] rounded-sm'>
  <h1 className='text-6xl flex justify-center items-center w-full bg-[#1111119c] h-full text-center my-10 text-white font-bold'>Gallery</h1>
  </div>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        { gallery?.map(gallery =><GalleryCard key={gallery._id} gallery={gallery} overlayContent={<div><h1 className="text-xl text-white">{gallery.name}</h1><p>{gallery.description}</p></div>}>
               
        </GalleryCard>
         
        )}
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
  <div className="w-full flex justify-center my-8"> <button className="btn btn-success bg-green-600 px-8 text-3xl text-white my-1  hover:bg-sky-600" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add</button></div>    

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <h1 className="text-center text-xl font-semibold text-orange-700 ">Add Gallery</h1>
    <form method="dialog" onSubmit={handleAdd}>
      {/* if there is a button in form, it will close the modal */}
      
      <label className="block mb-2 dark:text-black" htmlFor="name">
               Name
              </label>
              <input
                className="w-full p-2 mb-4 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="user Name"
                id="name"
                name="name"
                defaultValue={user?.displayName}
                disabled
              />
              <label className="block mb-2 dark:text-black" htmlFor="des">
              Description
              </label>
              <input
                className="w-full p-2 mb-4 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="description"
                id="des"
                name="des"
                
              />
              <label className="block mb-2 dark:text-black" htmlFor="image">
               Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Image"
                id="image"
                name="image"
                
              />
               <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#0f8637] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add"
          />
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
    
  </div>
</dialog>
  </div> 
  <ToastContainer></ToastContainer>
  </>

        
    );
};

export default Gallery;