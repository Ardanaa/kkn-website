import React, { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import logo from '../assets/logo.png'
import logoMonotone from '../assets/logo-monotone.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeNavbar)

  return (
    <div className={`shadow-md w-full fixed top-0 left-0 z-10 transition-all duration-200 ease-in ${navbar ? 'bg-[#EDE5CF]' : ''}`}>
      <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <img className='h-[60px]' src={navbar ? logo : logoMonotone} alt="logo" />
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden '>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'} ${navbar ? 'text-black' : 'md:text-white'}`}>
          <li className={'md:ml-8 text-l md:my-0 my-7'}>
            <a href="/" className={`${navbar ? 'hover:text-[#A57D10]' : 'hover:border-b-2 border-white'}`}>Tentang Desa</a>
          </li>
          <li className='md:ml-8 text-l md:my-0 my-7'>
            <a href="/" className={`${navbar ? 'hover:text-[#A57D10]' : 'hover:border-b-2 border-white'}`}>Produk</a>
          </li>
          <li className='md:ml-8 text-l md:my-0 my-7'>
            <a href="/" className={`${navbar ? 'hover:text-[#A57D10]' : 'hover:border-b-2 border-white'}`}>Kontributor</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar