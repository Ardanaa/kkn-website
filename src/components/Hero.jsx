import React from 'react'
import background from "../assets/background.png";

const Hero = (props) => {
  return (
    <div className="bg-[] h-[600px] w-full bg-cover bg-top relative z-0">
      <img src={background} className="h-full inset-0 w-full object-cover absolute" alt="background" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent bg-opacity-50"></div>
      <div className="flex items-center justify-center h-full relative">
        <h1 className="text-center text-5xl font-bold text-teal-100">
          {props.title}
        </h1>
      </div>
    </div>
  )
}

export default Hero;