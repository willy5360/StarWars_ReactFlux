const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL: "https://www.swapi.tech/api/",
			peopleURL: "https://www.swapi.tech/api/people",
			people: [],
			favourites: ["patatin"]
		},
		actions: {
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
			}
		},
		addFavourites: name => {
			setStore({ favourites: [getStore().favourites, name] });
		}
	};
};

export default getState;
