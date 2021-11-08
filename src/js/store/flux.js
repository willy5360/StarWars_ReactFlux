const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL: "https://www.swapi.tech/api/",
			planetsURL: "https://www.swapi.tech/api/planets/",
			planetsURL_2: "https://www.swapi.tech/api/planets/1",
			planets: [],
			planetsFirsturl: [1],
			planetsURLDetail: [],
			planetsUID: [],
			peopleURL: "https://www.swapi.tech/api/people",
			people: [],
			favourites: []
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
						setStore({
							planetsUID: getStore().planets.map(UID => {
								return UID.uid;
							})
						});
						// console.log("aqui esta planets uid", planetsUID);
					})
					.catch(error => {
						console.log(error.messsage);
					});
			},
			getPeople: () => {
				fetch(getStore().peopleURL)
					.then(response => {
						if (response.ok) {
							// console.log("aqui esta el diccionario de people", response.json().results);
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
						// console.log(responseAsJson.results);
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			getPlanetsInfo: () => {
				// for (let i in getStore().planetsUID)
				fetch(getStore().planetsURL_2)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
						throw new Error("fail on loading planets detail");
					})
					.then(responseAsJSON => {
						// console.log("diccionario de planets/1", responseAsJSON);
						// console.log("diccionario de sliceado", [planetsURL_2.slice(0, -1).concat(2)]);
						setStore({
							planetsURLDetail: [...getStore().planetsURLDetail, responseAsJSON.result.properties]
						});
						setStore({
							planetsFirsturl: [getStore().planetsFirsturl + 1],
							planetsURL_2: [
								getStore()
									.planetsURL_2.slice(0, -1)
									.concat(getStore().planetsFirsturl)
							]
						});
						if (getStore().planetsURL_2) {
							getActions().getPlanetsInfo();
						}
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
