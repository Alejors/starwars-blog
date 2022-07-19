const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			counter: {
				people: 2,
				vehicles: 2,
				planets: 2
			},
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
						'name': 'X-34 Speeder',
						'url': 'https://i.pinimg.com/originals/c4/33/59/c4335925398a9f9970ae913953e09982.jpg'
					},
					{
						'name': 'Tie Bomber',
						'url': 'https://i.ebayimg.com/images/g/MEQAAOSwjq9b0q2Z/s-l500.jpg'
					},
					{
						'name': 'X-Wing',
						'url': 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-x-wing-7x2-xl.jpg.adapt.crop16x9.320w.jpg'
					}
				],
				planets: [
					{
						'name': 'Tatooine',
						'url': 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2015/03/Tatooine.jpg?fit=1280%2C719&quality=80&ssl=1'
					},
					{
						'name': 'Alderaan',
						'url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyakCpeUriTFiEWXpLWOoI8pkdXv4u7Wmcww&usqp=CAU'
					},
					{
						'name': 'Naboo',
						'url': 'https://sm.ign.com/ign_latam/screenshot/default/nabo_ya2r.jpg'
					}
				]
			},
			favorites: [],
			liked: []
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
						return (data)
					})
					.then(async (data) => {
						const { results } = data;
						results.forEach(async (element, index) => {
							{if(element.homeworld !== undefined){
								const resp = await fetch(element.homeworld);
								const info = await resp.json();
								data.results[index].homeworld = info.name;
							}
							}
						})
						setStore({ [detail]: data.results });
					})
					.catch(error => console.log(error));
			},

			addFavorite: (location, index) => {
				const store = getStore();
				const actions = getActions();
				const aux = store.favorites;
				const favorite = {
					'name': `${store[location][index].name}`,
					'url': `/${location}/${index}`
				};
				let found = aux.find((element) => element.name == favorite.name);
				if(!found){
				aux.push(favorite);
				setStore({ favorites: aux });
				actions.includeliked(location, index);
				}
			},

			deleteFavorite: (index) => {
				const store = getStore();
				const actions = getActions();
				const aux = [...store.favorites];
				const favaux = aux[index].url.replace(/\//g,"");
				aux[index] = null;
				const filtered = aux.filter(ele => ele !== null);
				actions.deleteliked(favaux);
				setStore({favorites: filtered});
			},

			includeliked: (location, index) => {
				const store = getStore();
				let like = location+index;
				store.liked.push(like);
			},

			deleteliked: (str) => {
				const store = getStore();
				const likedindex = store.liked.indexOf(str);
				const likedaux = [...store.liked];
				likedaux[likedindex] = null;
				const filteredliked = likedaux.filter((ele) => ele != null);
				setStore({ liked: filteredliked })
			},
			
			loadmore: (type) => {
				const store = getStore();
				const counter = store.counter[type];

				fetch(`https://swapi.dev/api/` + type + `/?page=` + `${counter}`)
					.then(response => response.json())
					.then(async (data) => {
						const { results } = data;
						results.forEach(async (element, index) => {
							{if(element.homeworld !== undefined){
								const resp = await fetch(element.homeworld);
								const info = await resp.json();
								data.results[index].homeworld = info.name;
							}
							}
						})
						const aux = [...store[type], ...data.results];
						setStore({ [type]: aux });
					})
					.catch(error => console.log(error));
				setStore(store.counter[type] = counter + 1);
			}
		}
	}
};

export default getState;