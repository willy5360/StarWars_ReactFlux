import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ">Star Wars</span>
			</Link>

			<div className="ml-auto">
				<Link to="/planets">
					<button className="main_link">Planets</button>
				</Link>
				<Link to="/people">
					<button className="people_link">People</button>
				</Link>
			</div>
			<div className="main_dropdown">
				<Dropdown>
					<Dropdown.Toggle className="dropdown">Favourites</Dropdown.Toggle>

					<Dropdown.Menu>
						<ul>
							<li>{store.favourites}</li>
						</ul>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
