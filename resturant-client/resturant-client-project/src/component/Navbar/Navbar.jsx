import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";




const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
   // console.log(user); 
   const handleLogOut = () => {
    logout()
        .then(() => { })
        .catch(error => console.log(error))
}
     const navLinks = <>
         <li  className="mr-3 border-zinc-700 border-2 bg-green-300  rounded-md"><NavLink to="/">Home</NavLink></li>
         <li  className="mr-3 border-zinc-700 border-2 bg-green-300 rounded-md"><NavLink to="/all">All Foods</NavLink></li>
         
         { user && <>
            <li  className="mr-3 border-zinc-700 border-2 bg-green-300 rounded-md"><NavLink to="/gallery">Gallery</NavLink></li>
            {/* <li  className="mr-3 border-zinc-700 border-2 rounded-md"><NavLink to="/add">Add Tourists Spot</NavLink></li>
            <li  className="border-zinc-700 border-2 rounded-md"><NavLink to="/list">My List</NavLink></li> */}
         </>}
     </>
     
    return (
        <>
        <div className="navbar mb-8 shadow-sm bg-transparent shadow-green-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white p-1 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-200 z-50 rounded-box w-52">
                        {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-emerald-300 p-0 font-bold normal-case text-base md:text-xl lg:text-3xl" ><h2 
  >DineEase</h2></Link>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>



                <div className="navbar-end">
                
                    {
                        user? <div className=" flex items-center justify-center gap-2">
                            <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10  rounded-full dropdown dropdown-end">
                                    <img data-tooltip-id="my-tooltips" data-tooltip-html={user.displayName ||'user name not found'} src={user?.photoURL || "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } />
                                </div>
                            </label>

                            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-sky-100 rounded-box w-52'
            >
              
              <li className="hover:bg-green-300 rounded-md">
                <Link className="text-base font-semibold" to='/myadd'>My Added food item</Link>
              </li>
              <li className="hover:bg-green-300 rounded-md">
                <Link className="text-base font-semibold" to='/add'>Add a food item</Link>
              </li>
              <li className="hover:bg-green-300 rounded-md">
                <Link className="text-base font-semibold" to='/order'>My ordered food item</Link>
              </li>
             
            </ul>
                            </div>
                            <div>
                            <button
                                        onClick={handleLogOut}
                                        className="btn btn-sm bg-sky-400 hover:bg-blue-500 text-white  btn-ghost">Logout</button>
                                        </div>
                        </div>
                            :
                            <div className="flex">
                            <Link to='/login'>
                                <button className="btn btn-sm bg-green-500 hover:bg-blue-500 text-white mr-2  btn-ghost">Login</button>
                            </Link>
                            
                        </div>
                    }
                </div>
            </div>
            
        </>
    );
};

export default Navbar;