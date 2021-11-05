import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Planets from "../component/planets.jsx";

export const PlanetsTab = () => {
	const { store, actions } = useContext(Context);
	const [cards, setCards] = useState([]);

	useEffect(
		() => {
			if (store.planets.length != 0) {
				console.log("aqui deberia salir la lista de planetas", store.planets.name);
				//aqui vamos a mapear
				setCards(
					store.planets.map((planet, index) => {
						return <Planets key={index.toString()} name={planet.name} />;
					})
				);
				console.log("aqui esta cards", cards);
			}
		},
		[store.planets]
	);
	console.log("aqui deberia haber una lista", store.planets.results);

	return (
		<Fragment>
			<h1>Planets</h1>
			<div className="planets_card_container">{cards}</div>
		</Fragment>
	);
};
