import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => { 
    const { googleLogin} = useAuth();

    // navigation systems
  const navigate = useNavigate();
  const location = useLocation();

const from = location?.state || "/";

const handleSocialLogin = (socialProvider) => {
  socialProvider()
  .then((result) => {
    
    if (result.user) {
      // if(result.user.email == null){
      //   result.user.email = "asfaqurrahman055@gmail.com"     
      // }
       toast.success("Logged in Successfully!!");

    return  setTimeout(()=>{ navigate(from);}, "4500");
      
      
  }  
  });
  
};
    return (
        <>
        <div className="divider text-green-700 font-bold">continue with</div>
      <div className="flex flex-col gap-3 md:flex-row justify-around mb-3">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-error text-white bg-red-500 btn-sm "
        >
         SignIn with Google
        </button>
        
        
       

        </div>
        <ToastContainer />
            </>
    );
};

export default SocialLogin;