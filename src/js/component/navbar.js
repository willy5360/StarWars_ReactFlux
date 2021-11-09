import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [list, setList] = useState([]);

	const deleteTask = indexList => {
		store.favourites.filter((_, index) => index != indexList);
		console.log(indexList);
	};
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
					<button className="main_link">People</button>
				</Link>
			</div>
			<div className="main_dropdown">
				<Dropdown>
					<Dropdown.Toggle className="dropdown">Favourites</Dropdown.Toggle>

					<Dropdown.Menu>
						<ul>
							{store.favourites.map((favourite, index) => {
								return (
									<li key={index.toString()}>
										{favourite}
										{/* <button className="trash">
											<i className="far fa-trash-alt" />
										</button> */}
									</li>
								);
							})}
						</ul>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
