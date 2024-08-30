/* eslint-disable no-unused-vars */
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Link} from "react-router-dom";
const FoodDetail = () => {
    const loadedSpots = useLoaderData();
    const Navigate = useNavigate();
    const {user} = useAuth()|| {};
    const { _id, foodname, category, image, quantity, price, origin, description,email} = loadedSpots;
    return (
        <div className="flex flex-col lg:flex-row gap-8 items-center w-[85%] mx-auto my-10 py-10 md:pl-5 bg-[#e9e9e9f3]">
        <div data-aos="flip-right" data-aos-duration="2000">
         <img className="h-[500px] w-[full] border-2 border-gray-500 rounded-lg" src={image} alt="" />
         </div> 
     <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" className="flex flex-col gap-4">
         <h2 className="text-4xl font-bold primary-font">{foodname}</h2>
         <p className="pb-5  text-xl font-medium border-[#13131326]">#{category}</p>
         <p className="pb-3  text-xl font-medium border-[#13131326]">origin : {origin}</p>
         <p className="pb-3  text-xl font-medium border-[#13131326]">quantity : {quantity}</p>
         <p className="pb-3  text-xl font-medium border-[#13131326]">Made By : {email}</p>
         
         <p className="my-4"><span className=" font-bold">Description :</span> {description}</p>
         <div className="w-Full flex flex-col gap-2 pb-6 border-b-2  border-[#13131326]">
         </div>
        <div className="flex flex-row justify-between">
        
        <h3 className='text-[#0a76be] font-medium'>Cost: ${price}</h3>
        </div>
        {
              quantity == 0 ? <h2 className="text-red-500 font-bold text-xl justify-center flex my-3">Not available</h2> : ''
            }
        <div disabled={user?.email===email}> <button disabled={user?.email===email || quantity == 0} onClick={()=>Navigate(`/purchase/${_id}`)} className="btn bg-green-500 btn-success">Purchase</button></div>
        
        
        
       
        </div> 
        </div>
    );
};

export default FoodDetail;