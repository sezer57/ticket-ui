import React from 'react'

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="/img.jpg"
      alt="Banner"
    />
    <div className="absolute inset-0 bg-gray-800 bg-opacity-60"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center mt-10">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Hoşgeldiniz!
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        <a href='/ticket'>   Take Ticket</a> 
      </button>
    </div>
  </div>
  )
}

export default Banner
