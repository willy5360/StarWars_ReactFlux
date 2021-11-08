import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FavButtonPeople } from "./favButtonPeople.jsx";

const Planets = props => {
	return (
		<Fragment>
			<div className="main_card">
				<img
					className="main_card_img"
					src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4"
				/>
				<div className="main_card_body">
					<h1 className="main_card_body_tittle">{props.name}</h1>
					<p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
					<button> go somewhere</button>
					<button>
						<FavButtonPeople />
					</button>
				</div>
			</div>
		</Fragment>
	);
};
Planets.propTypes = {
	name: PropTypes.string
};

export default Planets;
