import React, { useState, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/authProvider';

const NavBar = () => {

  const [sticky, setSticky] = useState(false);
  const [authUser, setAuthUser] = useAuth();

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 0)
      {
        setSticky(true);
      }
      else
      {
        setSticky(false);
      }
    };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }

  }, []);

    const navitems = (<>
            <li>
            <a href='/'>
                Home
            </a>
        </li>
         <li>
            <a href='/explore'>
                Explore
            </a>
        </li>
    </>)
  return (
    <>
        <div className = {`max-w-screen-2xl container mx-auto md:px-20 px-4 py-3 text-2xl fixed top-0 right-0 left-0 z-50 
          ${sticky? "sticky-navbar shadow-md bg-base-300  duration-300 transition-all ease-in-out":""}`}>
      
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navitems}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl py-2 font-bold cursor-pointer">faQirChandBooks</a>
  </div>
  
  <div className="navbar-end space-x-3">
    
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navitems}
    </ul>
  </div>

      {
        authUser?<Logout/>:
        <div>
          <a className="bg-gray-500 text-white text-[20px] rounded-md px-3 py-1 hover:bg-gray-400 duration-300 cursor-pointer" 
    onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</a>
    <Login/> 
        </div> 
      }

  </div>
</div>

    </>
  )
}

export default NavBar
