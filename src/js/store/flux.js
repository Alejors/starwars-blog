const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		},
		actions: {
			loadData: (detail) => {
				fetch('https://swapi.dev/api/' + detail)
					.then(response => response.json())
					.then(data => {
						setStore({[detail]: data});
						console.log(data)
					})
					.catch(error => console.log(error));
			}
		}
	}
};

export default getState;
