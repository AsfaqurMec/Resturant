//import {useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Helmet } from "react-helmet";
import axios from 'axios'
import AllFoodCard from './AllFoodCard';
const AllFood = () => {
 
 
   // const loadedFood = useLoaderData();
    
   const [sort, setSort] = useState('')
    const [searchText, setSearchText] = useState('')
    const [search, setSearch] = useState('')
    const [food, setFood] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `https://resturant-server-liart.vercel.app/search?search=${search}&sort=${sort}`
        )
        
        console.log(sort);

        setFood(data)
        console.log(data);
      }
      getData()
    }, [search, sort])

    const handleSearch = e => {
      e.preventDefault()
// console.log(search);
      setSearch(searchText)
    }
   // console.log(search)

    return (
    <>
     <Helmet>
  <title>DineEase | AllFoods</title>
</Helmet>   
<div className=' m-2 md:m-20'>
  <div className='w-full mb-5 h-32 bg-slate-600 bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/0j6mW6M/chinatown-bangkok.jpg")] rounded-sm'>
  <h1 className='text-6xl flex justify-center items-center w-full bg-[#1111119c] h-full text-center my-10 text-white font-bold'>All Foods</h1>
  </div>
      
      <div className='w-full mb-16 mt-14 flex flex-col md:flex-row gap-5 md:gap-3 justify-center'>
      <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Food Name'
                aria-label='Enter Food Name'
              />
              <button type='submit' className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-gray-800 focus:bg-none focus:outline-none rounded-l-none'>
                Search
              </button>
            </div>
          </form>

          <div>
            <select
              onChange={e => {
                setSort(e.target.value)
                
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Price</option>
              
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
</div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        { food?.map(food => <AllFoodCard
            key={food._id}
            food={food}
            
            setFood={setFood}
          ></AllFoodCard>)
        }
      </div>
    </div>
    </>
    );
};

export default AllFood;