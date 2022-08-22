import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
	return (
		<div>
			<Navbar />

			<Hero title="Tumbuh Bersama Desa Cemara Jaya"/>

			<Content/>

			<div className="mb-[500px]"></div>
		</div>
	);
}

export default App;
