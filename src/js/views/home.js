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
						<p className="content-header">La Star MORISION</p>

						<p className="content-body">
							After years of galactic silence, civilization is on the brink of a new Star Wars release.
							Now, with the Force preparing to awaken, the people of Earth seek solace in films of old.
							With nowhere to turn, they gather in great numbers and watch the original trilogy without
							rest. Three films. 6 hours. 24 minutes. Popcorn. Slushies. Total elation.
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
