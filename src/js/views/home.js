import React, { Fragment, useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import People from "../component/people.jsx";
import starwarsimg from "../../img/starwars.png";

export const Home = () => {
	return (
		<Fragment>
			<div className="star-wars-intro">
				<div className="stars" />
				<div className="twinkling" />
				<div className="clouds" />
				<p className="intro-text">A few days ago, during...</p>

				<h2 className="main-logo">
					<img src={starwarsimg} />
				</h2>

				<div className="main-content">
					<div className="title-content">
						<p className="content-header">The Code War</p>

						<p className="content-body">
							After years of galactic silence, students are on the brink of a new Code War release. Now,
							with the CLICK FORCE preparing to awaken, the people of 4geeksAcademy seek solace on friday
							evenings. With nowhere to run, they gather the great coffee and code the final project
							without rest. Persuing their way to become Full-Stack Developers and make balance between
							sleeping and coding...
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
