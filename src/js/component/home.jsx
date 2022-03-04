import React from "react";
import Body from "./body";
import Navbar from "./navbar";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Body />
			<Footer />
		</>
	);
};

export default Home;
