const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			images: {
				people: [
					{
						'name': 'Luke Skywalker',
						'url': 'https://i0.wp.com/wipy.tv/wp-content/uploads/2020/02/Luke-Skywalker-tuvo-otro-lightsaber.jpg?fit=1000%2C600&ssl=1'
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
				vehicles: [
					{
						'name': 'x-34 speeder',
						'url': 'https://i.pinimg.com/originals/c4/33/59/c4335925398a9f9970ae913953e09982.jpg'
					},
					{
						'name': 'tie bomber',
						'url': 'https://i.ebayimg.com/images/g/MEQAAOSwjq9b0q2Z/s-l500.jpg'
					},
					{
						'name': 'x-wing',
						'url': 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-x-wing-7x2-xl.jpg.adapt.crop16x9.320w.jpg'
					}
				],
				planets: [
					{
						'name': 'tatooine',
						'url': 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2015/03/Tatooine.jpg?fit=1280%2C719&quality=80&ssl=1'
					},
					{
						'name': 'alderaan',
						'url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyakCpeUriTFiEWXpLWOoI8pkdXv4u7Wmcww&usqp=CAU'
					},
					{
						'name': 'naboo',
						'url': 'https://sm.ign.com/ign_latam/screenshot/default/nabo_ya2r.jpg'
					}
				]
			}
		},
		actions: {
			loadData: (detail) => {
				fetch('https://swapi.dev/api/' + detail, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
				)
					.then(response => response.json())
					.then(data => {
						setStore({ [detail]: data.results });
					})
					.catch(error => console.log(error));
			},
			counter: 2,
			loadMore: (detail) => {
				fetch('https://swapi.dev/api/' + detail + '?page=' + counter)
				.then(response => response.json())
				.then(data => setStore({[detail]: data.results}))
				.catch(error => console.log(error));
				counter+= 1;
			},
			loadLess: (detail) => {
				counter-= 2;
				fetch('https://swapi.dev/api/' + detail + '?page=' + counter)
				.then(response => response.json())
				.then(data => setStore({[detail]: data.results}))
				.catch(error => console.log(error));
			}
		}
	}
};

export default getState;
