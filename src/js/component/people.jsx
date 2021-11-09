import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { FavButtonPeople } from "./favButtonPeople.jsx";
import { Context } from "../store/appContext.js";

const People = props => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<div className="main_card">
				<img
					className="main_card_img"
					src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?cs=srgb&dl=pexels-lina-kivaka-1741205.jpg&fm=jpg"
				/>
				<div className="main_card_Body">
					<h1 className="main_card_body_tittle">{props.name}</h1>
					<p>contenido</p>
					<div className="card_buttons">
						<button className="info">More Info</button>
						<button
							onClick={() => {
								actions.addFavourites(props.name);
							}}
							className="heart">
							<FavButtonPeople />
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

People.propTypes = {
	name: PropTypes.string
};
export default People;
