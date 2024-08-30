import { useEffect, useState } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const load = () => {
             setTimeout( () => {
                setLoading(false);
             }, '500');
        }
       load(); 
    }, []);

    return (
        
        isLoading ? (<div className="w-full h-screen flex justify-center items-center"><span className="loading loading-dots w-20"></span></div> ) : (
        <div className='w-[100%] mx-auto bg-[url("https://i.ibb.co/NFfxK38/10505079-4478925.jpg")]'>

        
            <Navbar ></Navbar>

            <div className='w-full'>
               <Outlet></Outlet>
            </div>
            
            
            <Footer></Footer>
            
        </div>
        
         )
    );
   
};

export default Root;