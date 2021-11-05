const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL: "https://www.swapi.tech/api/",
			planetsURL: "https://www.swapi.tech/api/planets",
			planets: [],
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
			addFavourites: name => {
				setStore({ favourites: [...getStore().favourites, name] });
			}
		}
	};
};

export default getState;
