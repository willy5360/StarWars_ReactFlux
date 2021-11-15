import React, { useContext, useEffect, useState, Fragment } from "react";
import PeopleCardDetail from "../component/peopleCardDetail.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";

export const PeopleDetail = () => {
	const { store, actions } = useContext(Context);
	const [cardsDetail, setCardsDetail] = useState([]);
	let params = useParams();

	useEffect(() => {
		actions.getPeopleInfo(params.uid);
	}, []);

	useEffect(
		() => {
			if (store.peopleURLDetail.length != 0) {
				setCardsDetail(
					store.peopleURLDetail.map((PeopleDetail, index) => {
						return (
							<PeopleCardDetail
								key={index.toString()}
								name={PeopleDetail.name}
								height={PeopleDetail.height}
								mass={PeopleDetail.mass}
								hair_color={PeopleDetail.hair_color}
								skin_color={PeopleDetail.skin_color}
								eye_color={PeopleDetail.eye_color}
								birth_year={PeopleDetail.birth_year}
							/>
						);
					})
				);
			}
		},
		[store.peopleURLDetail]
	);

	return (
		<Fragment>
			<div className="view_card_detail"> {cardsDetail}</div>
		</Fragment>
	);
};
