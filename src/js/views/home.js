import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Planets from "../component/planets.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return <h1>Starwars</h1>;
};
