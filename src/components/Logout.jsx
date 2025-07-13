import React from 'react'
import toast from 'react-hot-toast';
import { useAuth } from '../context/authProvider';
const Logout = () => {

    const [authUser, setAuthUser] = useAuth();

    const handleLogOut = () => {
        try {
            //change the state of user first and make him null
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("user")
            toast.success("Logout Successfully !! ");
            setTimeout(()=>{
            window.location.reload();
            }, 500)

        } catch (error) {
            toast.error("Error :" + error.message);
            setTimeout(()=>{}, 500)
        }
    }
  return (
    <div>
      <button className='bg-red-500 text-white text-[20px] rounded-md px-3 py-1 hover:bg-red-400 duration-300 cursor-pointer'
      onClick={handleLogOut}>
        LogOut
        </button>
        </div>
  )
}

export default Logout
