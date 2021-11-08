import People from "./people.jsx";
import React, { useState } from "react";

export const FavButtonPeople = () => {
	const [like, setLike] = useState(<i className="fas fa-heart unclicked" />);
	const [value, setValue] = useState(true);

	const changeLike = () => {
		if (value == true) {
			setLike(<i className="fas fa-heart clicked" />);
			setValue(false);
		} else {
			setLike(<i className="fas fa-heart unclicked" />);
			setValue(true);
		}
	};

	return <span onClick={() => changeLike()}>{like}</span>;
};
