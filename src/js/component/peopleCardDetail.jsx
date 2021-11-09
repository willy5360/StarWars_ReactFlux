import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types"

const PeopleCardDetail = props=>{
    return (
    <Fragment>
    <Card>
        <Card.Header as="h5">{props.name}</Card.Header>
            <Card.Body>
                <Card.Text>Height:{" "} {props.height}</Card.Text>
                <Card.Text>Mass:{" "}{props.mass}</Card.Text>
                <Card.Text>Hair{" "}color:{" "}{props.hair_color}</Card.Text>
                <Card.Text>Skin{" "}color:{" "}{props.skin_color}</Card.Text>
                <Card.Text>Eyes{" "}color:{" "}{props.eye_color}</Card.Text>
                <Card.Text>Birth{" "}year:{" "}{props.birth_year}</Card.Text>            
            </Card.Body>
    </Card>
</Fragment>)
}

PeopleCardDetail.propTypes={
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,

}

export default PeopleCardDetail;


