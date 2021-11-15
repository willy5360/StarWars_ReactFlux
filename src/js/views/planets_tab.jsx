import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Planets from "../component/planets.jsx";

export const PlanetsTab = () => {
	const { store, actions } = useContext(Context);
	const [cards, setCards] = useState([]);

	useEffect(
		() => {
			if (store.planets.length != 0) {
				setCards(
					store.planets.map((planet, index) => {
						return <Planets key={index.toString()} name={planet.name} uid={planet.uid} />;
					})
				);
			}
		},
		[store.planets]
	);
	return (
		<Fragment>
			<div className="card_container">{cards}</div>
		</Fragment>
	);
};
