/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from "../../hook/useAuth";
import SocialLogin from './SocialLogin';

import { useState } from "react";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa6";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const Login = () => {
  
  const [success, setSuccess] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const { signInUser, setLoading, loading, } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // navigation system
  const navigate = useNavigate();
  const location = useLocation();
    const from = location?.state || "/";

    // handle register
    const onSubmit = data => {
        const { email, password } = data;

        
        signInUser(email, password)
        
        .then((result) => {
          
            if (result.user) {
              // toast.success('logged in successfully');
              setSuccess('User logged in successfully');
               toast.success("User logged in Successfully!!");

              setTimeout(()=>{ navigate(from);}, "5500");
             
              
            } else {
              setError('email & password desnot match');
          }
          })
          .catch(error => {
           //  console.error(error);
             toast.warning('password & email invalid');
            setLoading(false);
        })
    }
    // console.log(user);

   

    return (
        <>
      <Helmet>
  <title>DineEase | Login</title>
</Helmet>
        
        <div className='hero h-full rounded-lg bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/BfzsZ6b/depositphotos-275596086-stock-photo-ingredients-making-traditional-italian-pesto.webp")]'>
                <div className="w-full hero-content flex-col gap-14 lg:gap-28 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl mt-5 text-green-500 bg-[#0303037d] text-center font-bold pb-1 rounded-xl">DineEase!</h1>
                        <p className="py-6 text-white text-center text-xl font-semibold">Login with social media for quick access.</p>
                        <SocialLogin></SocialLogin> 
                    </div>
                    <div data-aos="zoom-out-up" data-aos-duration="1000" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#d0d3d0a1] ">
                      
                      
                        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className='w-full flex flex-col justify-center items-center gap-2'>
                        <h1 className='font-semibold text-teal-900 text-3xl'>Login to your <span className='text-purple-500'>account</span></h1>
                        <label className="label font-medium">
                                New here? <Link to="/register" className="label-text-alt link link-hover font-medium text-blue-800 text-base ml-2">Sign Up Here!</Link>
                            </label>
                            </div> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                                />
                                 {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
                />
                <span className="absolute top-4 right-2 cursor-pointer" onClick={()=> setShow(!show)}>
                {
                       show ?  <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> 
                    }
                </span>
                </div>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral bg-emerald-500 font-semibold text-xl">Login</button>
                            </div>
                            
                        </form>
                        {/* {
                error && <p className="text-red-600 text-center mt-4">{error}</p>
             }
                        {
                success && <p className="text-green-600 text-center mt-4">{success}</p>
             } */}
                            
                    </div>
                </div>
                
            </div>
            <ToastContainer />
            </>
    );
};

export default Login;