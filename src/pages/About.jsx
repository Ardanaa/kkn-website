import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import background from "../assets/background.png";

function About() {
	return (
		<div>
			<Navbar
				static1='hover:border-b-2'
				scroll1='hover:text-[#A57D10]'
				static2='border-b-2 border-white'
				scroll2='text-[#A57D10]'
				static3='hover:border-b-2 border-white'
				scroll3='hover:text-[#A57D10]'
			/>

			<Hero title="Desa Cemara Jaya" img={background}/>

			<Footer/>
		</div>
	);
}

export default About;
