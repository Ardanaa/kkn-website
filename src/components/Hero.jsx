import React from 'react'

const Hero = (props) => {
  return (
    <div className="h-[600px] w-full bg-cover bg-top relative z-0">
      <img src={props.img} className="h-full inset-0 w-full object-cover absolute" alt="background" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent bg-opacity-50"></div>
      <div className="flex items-center justify-center h-full relative">
        <h1 className={`${props.textSize} text-center font-bold text-white`}>
          {props.title}
        </h1>
      </div>
    </div>
  )
}

export default Hero;