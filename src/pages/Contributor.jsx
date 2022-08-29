import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import background from "../assets/background.png";
import Team from "../components/Team"

function About() {
	return (
		<div>
			<Navbar
				static1='hover:border-b-2'
				scroll1='hover:text-[#A57D10]'
				static2='hover:border-b-2 border-white'
				scroll2='hover:text-[#A57D10]'
				static3='border-b-2 border-white'
				scroll3='text-[#A57D10]'
			/>

			<Hero title="Our Team" img={background}/>

			<Team/>

			<Footer/>
		</div>
	);
}

export default About;
