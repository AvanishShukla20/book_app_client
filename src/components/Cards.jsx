import React from 'react'

const Cards = ({ item }) => {
  return (
    <>
    <div className="mt-4 my-6 flex space-between px-2">
        <div className="card bg-base-200 w-90 shadow-sm my-5  hover:scale-103 hover:bg-base-300 transition duration-200 ">
            <figure className="h-70 top-0" >
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name} 
                <div className="badge badge-outline bg-green-700 ">{item.category}</div>
              </h2>
              <p>{ item.desc}</p>
              <div className="card-actions flex justify-between">
                <div className="cursor-pointer px-2 py-1 rounded-lg border-2 hover:text-green-700  transition duration-400">${item.price}</div>
                <div className="badge badge-outline hover:text-yellow-200 duration-400">Open</div>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Cards
