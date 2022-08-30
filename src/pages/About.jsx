import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContentAbout from "../components/ContentAbout";
import Footer from "../components/Footer";
import background3 from "../assets/background-3.png";

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

			<Hero textSize='text-5xl' title="Desa Cemara Jaya" img={background3}/>

			<ContentAbout/>

			<Footer/>
		</div>
	);
}

export default About;
