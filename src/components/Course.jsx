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
            Welcome to the Digital Library of faQirChandBooks, a timeless treasure trove for book lovers and knowledge seekers.
             Rooted in decades of literary tradition, our library seamlessly blends a rich legacy with modern digital accessibility.
              Explore an expansive collection that spans classic literature, contemporary fiction, rare manuscripts, academic works, and niche genres—all curated with passion and care. 
              Whether you're in search of ancient philosophy, bestselling thrillers, regional literature, or emerging authors, our platform offers a thoughtfully organized, intuitive reading experience. With powerful search tools, personalized recommendations, and cross-device accessibility, our digital library invites readers of every age and interest to immerse themselves in stories that educate, inspire, and endure.
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
