import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logoDesa from '../assets/logoDesa.png'
import logoDesaWhite from '../assets/logoDesaWhite.png'
import logo from '../assets/logo.png'
import logoMonotone from '../assets/logo-monotone.png'
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [openNav, setOpenNav] = useState(false);
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const changeNavbar = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeNavbar)

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Typography
          as="li"
          variant="small"
          color="white"
          className={`p-1 font-normal ${navbar ? props.scroll1 : props.static1}`}
        >
          Home
        </Typography>
      </Link>
      <Link to="/about">
        <Typography
          as="li"
          variant="small"
          color="white"
          className={`p-1 font-normal ${navbar ? props.scroll2 : props.static2}`}
        >
          Tentang Desa
        </Typography>
      </Link>
      <Link to="/contributor">
        <Typography
          as="li"
          variant="small"
          color="white"
          className={`p-1 font-normal ${navbar ? props.scroll3 : props.static3}`}
        >
          Kontributor
        </Typography>
      </Link>
    </ul>
  );

  return (
    <Navbar fullwidth='true' className={`mx-auto fixed z-10 w-full rounded-none border-0 py-2 px-4 lg:px-8 lg:py-4 ${navbar ? 'bg-[#EDE5CF]' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <img className='h-[50px]' src={navbar ? logoDesa : logoDesaWhite} alt="logo" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
  );
}