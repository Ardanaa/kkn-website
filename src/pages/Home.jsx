import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import background from "../assets/background.png";

function Home() {
	return (
		<div>
			<Navbar
				static1='border-b-2'
				scroll1='text-[#A57D10]'
				static2='hover:border-b-2 border-white'
				scroll2='hover:text-[#A57D10]'
				static3='hover:border-b-2 border-white'
				scroll3='hover:text-[#A57D10]'
			/>

			<Hero textSize='text-5xl' title="Tumbuh Bersama Desa Cemara Jaya" img={background} />

			<Content />

			<Footer />
		</div>
	);
}

export default Home;
