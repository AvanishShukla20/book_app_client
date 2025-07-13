import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const Course = () => {
  const [Book, setBook] = useState([]);

  useEffect(()=>{
    const getBook= async ()=>{
      try {
        const res = await axios.get('https://book-app-server-ju5a.onrender.com/books');
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            WelCome Back To This{" "}
            <span className="text-yellow-400">Digital Library</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>

          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
              Book.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
          }
        </div>
          <Link to="/">
            <button className="mt-6 mb-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-green-400 duration-300">
              Back
            </button>
          </Link>

      </div>
    </>
  )
}

export default Course
