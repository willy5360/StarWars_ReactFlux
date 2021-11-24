const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api/",
			planetsURL: "https://www.swapi.tech/api/planets/",
			planets: [],
			planetsURLDetail: [],
			peopleURL: "https://www.swapi.tech/api/people/",
			people: [],
			favourites: [],
			peopleURLDetail: []
		},
		actions: {
			getPlanets: () => {
				fetch(getStore().planetsURL)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("fail on loading planets ");
					})
					.then(responseAsJSON => {
						setStore({ planets: [...getStore().planets, ...responseAsJSON.results] });
						setStore({ planetsURL: responseAsJSON.next });
						if (responseAsJSON.next) {
							getActions().getPlanets();
						}
						localStorage.setItem("planets", JSON.stringify(getStore().planets));
						localStorage.setItem("planets_info", JSON.stringify(getStore().planetsURLDetail));
					})
					.catch(error => {
						console.log(error.messsage);
					});
			},
			getPeople: () => {
				fetch(getStore().peopleURL)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("fail");
					})
					.then(responseAsJson => {
						setStore({ people: [...getStore().people, ...responseAsJson.results] });
						setStore({ peopleURL: responseAsJson.next });
						if (responseAsJson.next) {
							getActions().getPeople();
						}
						console.log(responseAsJson.results);
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			getPlanetsInfo: id => {
				fetch(getStore().baseURL.concat("planets/", id))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("fail on loading planets detail");
					})
					.then(responseAsJSON => {
						setStore({
							planetsURLDetail: [responseAsJSON.result.properties]
						});
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			getPeopleInfo: id => {
				fetch(getStore().baseURL.concat("people/", id))
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("fail");
					})
					.then(responseAsJSON => {
						setStore({ peopleURLDetail: [responseAsJSON.result.properties] });
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			addFavourites: name => {
				setStore({ favourites: [...getStore().favourites, name] });
			}
		}
	};
};

export default getState;
