import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />

			<Hero title="Tumbuh Bersama Desa Cemara Jaya"/>

			<Content />

			<Footer/>
		</div>
	);
}

export default App;
