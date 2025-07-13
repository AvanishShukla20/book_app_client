import React from 'react'
import Home from './Home/Home'
import Library from './courses/Explore'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { useAuth } from './context/authProvider'
import toast, {Toaster} from 'react-hot-toast'

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={ authUser?<Library />: <Navigate to="/signup" /> }/>
        <Route path='/signup' element={< SignUp />}/>
      </Routes>
      <div><Toaster/></div>
    </div>
    </>
  )
}

export default App
