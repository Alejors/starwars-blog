const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			images: {
				people: [
					{
						'name': 'Luke Skywalker',
						'url': 'https://gcdn.lanetaneta.com/wp-content/uploads/2022/01/La-explicacion-de-la-fuerza-de-Luke-Skywalker-demuestra-que-780x470.jpg'
					},
					{
						'name': 'R2-D2',
						'url': 'https://www.rockandpop.cl/wp-content/uploads/2017/06/R2D2.jpg'
					},
					{
						'name': 'Darth Vader',
						'url': 'https://www.latercera.com/resizer/NRNVtGXLZ4koN7HWqudc8nyv3cs=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LS6NAJWL4ZA4PMRN4MTK5YYLBE.jpeg'
					}
				],
				vehicles: [],
				planets: []
			}
		},
		actions: {
			loadData: (detail) => {
				fetch('https://swapi.dev/api/' + detail)
					.then(response => response.json())
					.then(data => {
						setStore({ [detail]: data });
					})
					.catch(error => console.log(error));
			}
		}
	}
};

export default getState;
