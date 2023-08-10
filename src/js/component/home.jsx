/*import React from "react";*/
import React, { useState } from "react";
import Circulo from "./circulo";
import Deck from "./contenedor";

//create your first component
const Home = () => {
	const [selectedCircle, setClickCirculo]= useState(0);

	function clickCirculo(number) {
		setClickCirculo(number);	
	}
	
	
	return (
		<>
			<Deck>
				<Circulo color="red" selected={selectedCircle==1} onClick = {() => selectedCircle==1?clickCirculo(0):clickCirculo(1)} />
				<Circulo color="yellow" selected={selectedCircle==2} onClick = {() => selectedCircle==2?clickCirculo(0):clickCirculo(2)}/>
				<Circulo color="green" selected={selectedCircle==3} onClick = {() => selectedCircle==3?clickCirculo(0):clickCirculo(3)}/>
				
			</Deck>
			<div className="d-flex justify-content-center">
		
			</div>
		</>
	);
};

export default Home;
