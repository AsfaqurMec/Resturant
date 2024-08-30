/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const AllFoodCard = ({ food, setFood }) => {
    const  { _id, foodname, category, image, quantity, price, origin, description,email } = food;

    return (
        <div className="card card-compact border-2 rounded-sm  bg-[#e9e9e9f3] shadow-2xl p-1">
        <div className="flex flex-col gap-3">
            <div className='w-full border rounded-lg'>
            <img className='bg-slate-600 h-60 w-full mx-auto rounded-sm' src={image} alt="" />
            </div>
            
           
            <h2 className='text-2xl font-bold primary-font'>{foodname}</h2>
            
            <h4 className="pb-1 text-lg  text-[#0abe31] font-medium ">#{category}</h4>
            <h4 className="pb-1 text-lg text-[#0abe31] font-medium ">Available quantity: <span className='text-stone-900 text-lg'>{quantity}</span></h4>
            
            <div className="flex text-lg justify-start">
                        <h3 className='text-[#0abe4f] font-medium'><span className='text-red-500'>Price:</span> ${price}</h3>
            </div>
            <div className="w-full h-full">
            <Link to={`/food/${_id}`}>
             <button className="btn hover:bg-blue-500  w-full bg-[#0abe34a9] text-white rounded-sm">View Details</button>
             </Link>
            </div>
            
        </div>
    </div>
    );
};

export default AllFoodCard;