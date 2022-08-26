import React from 'react'

const Button = (props) => {
  return (
    <button type="button" class="text-black-800 bg-[#EDE5CF] hover:bg-[#A57D10] focus:outline-none focus:ring-4 focus:ring-[#EDE5CF] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
      {props.name}
    </button>
  )
}

export default Button;