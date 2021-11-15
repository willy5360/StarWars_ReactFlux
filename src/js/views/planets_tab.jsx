import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Planets from "../component/planets.jsx";

export const PlanetsTab = () => {
	const { store, actions } = useContext(Context);
	const [cards, setCards] = useState([]);

	useEffect(
		() => {
			if (store.planets.length != 0) {
				//aqui vamos a mapear
				setCards(
					store.planets.map((planet, index) => {
						return <Planets key={index.toString()} name={planet.name} uid={planet.uid} />;
					})
				);
				// console.log("aqui esta cards", cards);
				// console.log("aqui deberia salir la lista detalle del planeta 1", store.planetsURLDetail);
				// console.log("aqui esta planets url 2", store.planetsURL_2);
				// console.log("aqui esta planets detail", store.planetsURLDetail);
			}
		},
		[store.planets, store.planetsURLDetail]
	);
	// console.log("aqui deberia haber una lista", store.planets.results);

	return (
		<Fragment>
			<div className="card_container">{cards}</div>
		</Fragment>
	);
};
