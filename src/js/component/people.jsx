import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FavButtonPeople } from "./favButtonPeople.jsx";

const People = props => {
	return (
		<Fragment>
			<div className="people_card">
				<img
					className="people_card_img"
					src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?cs=srgb&dl=pexels-lina-kivaka-1741205.jpg&fm=jpg"
				/>
				<div className="planetsBody">
					<h1 className="people_card_body_tittle">{props.name}</h1>
					<p>contenido</p>
					<button>More Info</button>
					<button>
						<FavButtonPeople />
					</button>
				</div>
			</div>
		</Fragment>
	);
};

People.propTypes = {
	name: PropTypes.string
};
export default People;
