import React from "react";
import CardsContainer from "./CardsContainer";
import Jumbotron from "./jumbotron";
const Body = () => {
	return (
		<div className="container">
			<Jumbotron />
			<CardsContainer />
		</div>
	);
};

export default Body;
