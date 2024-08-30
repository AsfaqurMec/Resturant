import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation} from "react-router-dom";
import useAuth from "../../hook/useAuth";

import { useState } from "react";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa6";
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from "react-helmet";

const Register = () => {
const [show, setShow] = useState(false);
const [regError, setRegError] = useState('');
const [success, setSuccess] = useState('');

    const { createUser, updateUserProfile, setLoading } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

 // navigation systems
 const navigate = useNavigate();
 const location = useLocation();
      const onSubmit = (data) => {
        const { email, password, image, fullName } = data;
        
 // reset error
 setRegError('');
 setSuccess('');
   
   if(password.length < 6){
     setRegError('Atleast 6 characters');
     return;
   } else if(!/[A-Z]/.test(password)){
     setRegError('UpperCase required');
     return;
   } else if(!/[a-z]/.test(password)){
    setRegError('LowerCase required');
    return;
   } 
   

        //create user and update profile
        createUser(email, password)
        
            .then(() => {
                updateUserProfile(fullName, image, email)
              //  console.log(fullName);
              
              toast.success("Registered Successfully!!");

                 
                 setTimeout(()=>{ navigate(location?.state ? location.state : '/');}, "5500");  
      })
      .catch(error => {
        setLoading(false);
        toast.success("email already used!!");
         console.error(error);
    })
    }

    return (
        <>
        <Helmet>
  <title>DineEase | Register</title>
</Helmet>
        
        <div className='hero h-full  rounded-lg md:mb-14 bg-cover bg-center bg-no-repeat '>
        <div className="hero-content p-0 flex-col lg:flex-row">
        <div className='text-center flex flex-col justify-center items-center w-full h-48 lg:h-[556px] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/x5zm1XV/360-F-292203735-CSsyqy-S6-A4-Z9-Czd4-Msf7q-ZEhoxjpz-Zl1.jpg")] lg:text-center rounded-lg px-3 py-8'>
            <h1 className="text-5xl font-bold text-green-500">Welcome to our website!</h1>
            <p className="py-6 text-red-600 font-semibold">
              Thank you for choosing our website <strong>DineEase!</strong>
            </p>
           
          </div>
          <form 
             data-aos="zoom-out-up" data-aos-duration="1000"
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full lg:max-w-sm h-full shadow-2xl bg-green-400"
          >
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
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
              {
                regError && <p className="text-red-600 text-center mt-4">{regError}</p>
             }
             {
                success && <p className="text-green-600 text-center mt-4">{success}</p>
             }
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral ">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link font-semibold text-base link-hover text-rose-500">
                  Please Login
                </Link>
              </label>
              
            </div>
          </form>
          
        </div>
      </div>
      <ToastContainer></ToastContainer>
      </>
    );
};

export default Register;