/* eslint-disable react/prop-types */
import useAuth from "../../hook/useAuth";
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="w-full"> <span className="w-Full flex justify-center loading loading-spinner loading-lg"></span></div>
     } 

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    if (user) {
        return children;
    }
    if(user?.email){
        return children;
    }
    // return (
    //     <div>
    //         {children}
    //     </div>
    // );
};

export default PrivateRoute;