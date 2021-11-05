import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>

			<div className="ml-auto">
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link>
				<Link to="/people">
					<button className="btn btn-primary">People</button>
				</Link>
			</div>
		</nav>
	);
};
