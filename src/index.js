import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contributor from "./pages/Contributor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contributor" element={<Contributor />} />
			</Routes>
		</Router>
	</ThemeProvider>
);
