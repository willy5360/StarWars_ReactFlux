const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL: "https://www.swapi.tech/api/",
			planetsURL: "https://www.swapi.tech/api/planets",
			peopleURL: "https://www.swapi.tech/api/people",
			people: [],
			planets: [],
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
						// setStore({ planetsURL: responseAsJSON.next });
						// if (responseAsJSON.next) {
						// 	getActions().getPlanets();
						// }
						console.log("aqui esta el response as json", responseAsJSON.results);
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
						// setStore({ peopleURL: responseAsJson.next });
						// if (responseAsJson.next) {
						// 	getActions().getPeople();
						// }
						console.log(responseAsJson.results);
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			getPeopleInfo: id => {
				fetch(getStore().peopleURL.concat(id))
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
