import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import PlanetsCardDetail from "../component/planetsCardDetail.jsx";
import { Context } from "../store/appContext.js";

export const PlanetsDetail = () => {
	const { store, actions } = useContext(Context);
	const [cardsDetail, setCardsDetail] = useState([]);
	let params = useParams();

	useEffect(
		() => {
			actions.getPlanetsInfo(params.uid);
			// console.log("esto es param", params.uid);
			setCardsDetail(
				store.planetsURLDetail.map((planetDetails, index) => {
					return (
						<PlanetsCardDetail
							key={index.toString()}
							name={planetDetails.name}
							diameter={planetDetails.diameter}
							rotation_period={planetDetails.rotation_period}
							climate={planetDetails.climate}
						/>
					);
				})
			);
		},
		[store.planetsURLDetail]
	);

	// useEffect(()=>{
	//     if(Store)
	// },[store.planets])

	return (
		<Fragment>
			<h1>Hola</h1>
			<div>{cardsDetail}</div>
		</Fragment>
	);
};