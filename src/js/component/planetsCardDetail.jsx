import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const PlanetsCardDetail = props => {
	return (
		<Fragment>
			<Card>
				<Card.Header as="h5">{props.name}</Card.Header>
				<Card.Body>
					<Card.Text>
						Diameter:
						{props.diameter}
					</Card.Text>
					<Card.Text>
						Rotation:
						{props.rotation_period}
					</Card.Text>
					<Card.Text>
						Climate:
						{props.climate}
					</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

PlanetsCardDetail.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	rotation_period: PropTypes.string,
	climate: PropTypes.string
};

export default PlanetsCardDetail;
