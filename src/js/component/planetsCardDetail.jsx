import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const PlanetsCardDetail = props => {
	return (
		<Card className="card_detail">
			<Card.Header className="card_datail_title" as="h5">
				{props.name}
			</Card.Header>
			<div className="card_body_detail">
				<Card.Img
					className="detail_card_img"
					variant="left"
					src="https://acegif.com/wp-content/uploads/solar-system-13.gif"
				/>
				<Card.Body>
					<Card.Text>Diameter: {props.diameter}</Card.Text>
					<Card.Text>Rotation: {props.rotation_period}</Card.Text>
					<Card.Text>Climate: {props.climate}</Card.Text>
					<Card.Text>Terrain: {props.terrain}</Card.Text>
					<Card.Text>Population: {props.population}</Card.Text>
				</Card.Body>
			</div>
		</Card>
	);
};

PlanetsCardDetail.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	rotation_period: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string
};

export default PlanetsCardDetail;
