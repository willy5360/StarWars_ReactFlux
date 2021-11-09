import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetsTab } from "./views/planets_tab.jsx";
import People from "./component/people.jsx";
import { PeopleTab } from "./views/people_tab.jsx";
import { PlanetsDetail } from "./views/planetsDetail.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/planets" element={<PlanetsTab />} />
					<Route path="/people" element={<PeopleTab />} />
					<Route path="/planets/:uid" element={<PlanetsDetail />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
