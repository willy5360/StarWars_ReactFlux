import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { FavButtonPeople } from "./favButtonPeople.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="main_card">
			<img className="main_card_img" src="https://media.giphy.com/media/oeGgcmHVHLVCg/giphy.gif" />
			<div className="main_card_body">
				<h1 className="main_card_body_tittle">{props.name}</h1>
				<p>Here is a short description of all Star Wars characters, heros of my chilhood and even now...</p>
				<div className="card_buttons">
					<Link to={"/people/".concat(props.uid)}>
						<button className="info"> More info</button>
					</Link>
					<button
						className="heart"
						onClick={() => {
							actions.addFavourites(props.name);
						}}>
						<FavButtonPeople />
					</button>
				</div>
			</div>
		</div>
	);
};

People.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};
export default People;
