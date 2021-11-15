import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import People from "../component/people.jsx";

export const PeopleTab = () => {
	const { store, actions } = useContext(Context);
	const [cards, setCards] = useState([]);

	useEffect(
		() => {
			if (store.people.length != 0) {
				setCards(
					store.people.map((people, index) => {
						return <People key={index.toString()} name={people.name} uid={people.uid} />;
					})
				);
			}
		},
		[store.people]
	);

	return (
		<Fragment>
			<div className="card_container">{cards}</div>
		</Fragment>
	);
};
