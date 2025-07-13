import React from 'react'
import NavBar from '../components/NavBar'
import Course from '../components/Course'
import Footer from '../components/Footer'

const Library = () => {
  return (
    <>  
        <NavBar/>
        <div className="min-h-screen">
            <Course/>
        </div>
        <Footer/>
    </>
  )
}

export default Library
