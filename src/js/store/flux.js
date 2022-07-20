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
						'url': 'https://i0.wp.com/wipy.tv/wp-content/uploads/2020/02/Luke-Skywalker-tuvo-otro-lightsaber.jpg'
					},
					{
						'name': 'R2-D2',
						'url': 'https://www.rockandpop.cl/wp-content/uploads/2017/06/R2D2.jpg'
					},
					{
						'name': 'Darth Vader',
						'url': 'https://www.latercera.com/resizer/NRNVtGXLZ4koN7HWqudc8nyv3cs=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LS6NAJWL4ZA4PMRN4MTK5YYLBE.jpeg'
					},
					{
						'name': 'C-3PO',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/5/51/C-3PO_EP3.png'
					},
					{
						'name': 'Leia Organa',
						'url': 'https://newspack-hipertextual.s3.amazonaws.com/wp-content/uploads/2017/04/Leia.jpg'
					},
					{
						'name': 'Owen Lars',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/e/eb/OwenCardTrader.png'
					},
					{
						'name': 'Beru Whitesun lars',
						'url': 'https://pbs.twimg.com/media/FNhXaqPXsAYLil_.jpg'
					},
					{
						'name': 'R5-D4',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/c/cb/R5-D4_Sideshow.png'
					},
					{
						'name': 'Biggs Darklighter',
						'url': 'https://static.wikia.nocookie.net/swfanon/images/5/57/BiggsDarklighter.jpg'
					},
					{
						'name': 'Obi-Wan Kenobi',
						'url': 'https://mx.web.img3.acsta.net/r_654_368/newsv7/21/06/19/17/33/5124299.png'
					}
				],
				vehicles: [
					//PAGE 1
					{
						'name': 'X-34 landspeeder',
						'url': 'https://i.pinimg.com/originals/c4/33/59/c4335925398a9f9970ae913953e09982.jpg'
					},
					{
						'name': 'TIE bomber',
						'url': 'https://i.ebayimg.com/images/g/MEQAAOSwjq9b0q2Z/s-l500.jpg'
					},
					{
						'name': 'X-Wing',
						'url': 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-medium-vehicles-page-x-wing-7x2-xl.jpg.adapt.crop16x9.320w.jpg'
					},
					{
						'name': 'Sand Crawler',
						'url': 'https://static.wikia.nocookie.net/starwars/images/f/ff/Sandcrawler.png'
					},
					{
						'name': 'T-16 skyhopper',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/4/4d/T16skyhopper_negvv.png'
					},
					{
						'name': 'TIE/LN starfighter',
						'url': 'https://static.wikia.nocookie.net/starwarssquadron/images/b/b8/TIE_Fighter.jpg'
					},
					{
						'name': 'Snowspeeder',
						'url': 'https://static.wikia.nocookie.net/starwars/images/2/27/Rebel_snowspeeder_SWL.png'
					},
					{
						'name': 'AT-AT',
						'url': 'https://http2.mlstatic.com/D_NQ_NP_837942-MLC48692283367_122021-O.jpg'
					},
					{
						'name': 'AT-ST',
						'url': 'https://static.turbosquid.com/Preview/2014/07/12__04_00_01/AT_ST_render_0001.jpg316ce264-88d2-41b3-9782-0718208e0ba2Original.jpg'
					},
					{
						'name': 'Storm IV Twin-Pod cloud car',
						'url': 'https://static.wikia.nocookie.net/starwars/images/3/3b/Cloud-car-v2.png'
					},
					{
						'name': 'Sail barge',
						'url': 'https://i.pinimg.com/736x/14/65/dc/1465dcc8bbd2677eef9b9cb8dc7bf87f--jabbas-palace-jabba-the-hutt.jpg'
					}
				],
				planets: [
					//PAGE 1
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
					},
					{
						'name': 'Yavin IV',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/7/71/Yavin_Exterior_SWCT.png'
					},
					{
						'name': 'Hoth',
						'url': 'https://pm1.narvii.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg'
					},
					{
						'name': 'Dagobah',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/dagobah_1ab566e6.jpeg'
					},
					{
						'name': 'Bespin',
						'url': 'https://cdn.atomix.vg/wp-content/uploads/2016/06/BESPIN.jpg'
					},
					{
						'name': 'Endor',
						'url': 'https://pm1.narvii.com/6470/ff861dfaf18809ba3208cdff418ef14bb9ffe353_hq.jpg'
					},
					{
						'name': 'Coruscant',
						'url': 'https://www.cinemascomics.com/wp-content/uploads/2022/01/coruscant-star-wars.jpg'
					},
					{
						'name': 'Kamino',
						'url': 'https://i.pinimg.com/originals/a0/da/d4/a0dad42adf9d93afd83843f54767166f.jpg'
					},
					//PAGE 2
					{
						'name': 'Geonosis',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/5/59/Geonosis.jpg'
					},
					{
						'name': 'Utapau',
						'url': 'https://cdna.artstation.com/p/assets/covers/images/041/693/056/large/masashi-imagawa-masashi-imagawa-utapau-v006-00010.jpg'
					},
					{
						'name': 'Mustafar',
						'url': 'https://labibliotecadeltemplojedi.files.wordpress.com/2020/09/mustafar-5-facts_tall.jpg'
					},
					{
						'name': 'Kashyyyk',
						'url': 'https://c1.staticflickr.com/5/4548/26886055819_cdb084805c_b.jpg'
					},
					{
						'name': 'Polis Massa',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/a/a6/Polis_massa.png'
					},
					{
						'name': 'Mygeeto',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/f/fe/Mygeeto_bridge_battle.png'
					},
					{
						'name': 'Felucia',
						'url': 'https://i.pinimg.com/originals/74/80/65/7480655a2a4493e2a292effb5cd9d507.jpg'
					},
					{
						'name': 'Cato Neimoidia',
						'url': 'https://pm1.narvii.com/6680/bb4b9d9e2d498a5eaee5449855494bbb8910edd1_hq.jpg'
					},
					{
						'name': 'Saleucami',
						'url': 'https://i.pinimg.com/originals/39/14/6d/39146d1836c9a480b6f6a3c1de61e48b.jpg'
					},
					{
						'name': 'Stewjon',
						'url': 'https://qph.fs.quoracdn.net/main-qimg-cca6401da044683273d781c9d9cf6b40-lq'
					},
					//PAGE 3
					{
						'name': 'Eriadu',
						'url': 'https://media.moddb.com/cache/images/mods/1/14/13819/thumb_620x2000/eriadu.jpg'
					},
					{
						'name': 'Corellia',
						'url': 'http://pm1.narvii.com/6903/aff50bbe576515da9a4fcbb468af724f952db82er1-768-432v2_uhq.jpg'
					},
					{
						'name': 'Rodia',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/8/85/Rodia_palace.jpg'
					},
					{
						'name': 'Nal Hutta',
						'url': 'https://i.pinimg.com/564x/a7/a8/08/a7a80863fd8224bca81c42ab4fb7bc67.jpg'
					},
					{
						'name': 'Dantooine',
						'url': 'https://images.squarespace-cdn.com/content/v1/5e73815d51d75711a1ffe1fb/1598081563083-UU6B6PANO5F7TFDGD2KJ/image-asset.jpeg'
					},
					{
						'name': 'Bestine IV',
						'url': 'https://media.moddb.com/cache/images/downloads/1/174/173331/thumb_620x2000/ddd.JPG'
					},
					{
						'name': 'Ord Mantell',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/ordo-mantell-main_0320929c.jpeg'
					},
					{
						'name': 'unknown',
						'url': 'https://static.wikia.nocookie.net/starwars/images/3/3c/ZonamaSekotTEA.jpg'
					},
					{
						'name': 'Trandosha',
						'url': 'https://i.pinimg.com/originals/c5/ee/47/c5ee471ac268411c4b23839c7a68a693.png'
					},
					{
						'name': 'Socorro',
						'url': 'https://statics.viralizalo.com/virs/2016/12/VIR_326629_24574_planeta_de_star_wars_o_palabra_somali.jpg'
					},
					//PAGE 4
					{
						'name': 'Mon Cala',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/8/84/MonCalamariCity-WW.png'
					},
					{
						'name': 'Chandrila',
						'url': 'https://i.pinimg.com/originals/57/65/56/576556d57eb08255aed41cadf0bb03a3.jpg'
					},
					{
						'name': 'Sullust',
						'url': 'https://pm1.narvii.com/7018/c172e964e43c34f698b2954d25676610bb715b9br1-1920-1080v2_hq.jpg'
					},
					{
						'name': 'Toydaria',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_toydaria_01_169_70b20e0e.jpeg'
					},
					{
						'name': 'Malastare',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/c/c4/MalastareFuelLines-TZB.png'
					},
					{
						'name': 'Dathomir',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_dathomir_01_169_304c5db2.jpeg'
					},
					{
						'name': 'Ryloth',
						'url': 'https://pm1.narvii.com/6961/5a55061173a569368d11e43cf586401e7c0f0f48r1-1560-780v2_hq.jpg'
					},
					{
						'name': 'Aleen Minor',
						'url': 'https://static.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg'
					},
					{
						'name': 'Vulpter',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/b/be/Vulpter_FF7.jpg'
					},
					{
						'name': 'Troiken',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/c/ce/Troiken.jpg'
					},
					//PAGE 5
					{
						'name': 'Tund',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/4/4f/Tund.jpg'
					},
					{
						'name': 'Haruun Kal',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/9/92/HaruunKalCSWE.JPG'
					},
					{
						'name': 'Cerea',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/c/cc/Cerea-FDCR.png'
					},
					{
						'name': 'Glee Anselm',
						'url': 'https://pm1.narvii.com/7387/7d38ba6404bdc49b966cd542284c016541b2c23er1-992-508v2_hq.jpg'
					},
					{
						'name': 'Iridonia',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/1/10/Iridonian_city.jpg'
					},
					{
						'name': 'Tholoth',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/9/93/Balmorra_TOR_NEW.jpg'
					},
					{
						'name': 'Iktotch',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/f/f1/Iktotch_FDNP.png'
					},
					{
						'name': 'Quermia',
						'url': 'https://holopedia.de/images/3/3c/Quermiab.jpg'
					},
					{
						'name': 'Dorin',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/9/9b/Dorin-FDCR.png'
					},
					{
						'name': 'Champala',
						'url': 'https://i761.photobucket.com/albums/xx253/liverpooluk96/chagriancityhl4.png'
					},
					//PAGE 6
					{
						'name': 'Mirial',
						'url': 'https://pm1.narvii.com/6941/cdbce6108100e3717f4306e3d28d791b9a78f6b8r1-459-459v2_hq.jpg'
					},
					{
						'name': 'Serenno',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_serenno_01_169_0541fc55.jpeg'
					},
					{
						'name': 'Concord Dawn',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/8/84/Concord_Dawn_system.png'
					},
					{
						'name': 'Zolan',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/6/66/Zolan.jpg'
					},
					{
						'name': 'Ojom',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/9/9f/Ojom.jpg'
					},
					{
						'name': 'Skako',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/5/5b/Skako-Minor-ADE.png'
					},
					{
						'name': 'Muunilinst',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/e/e4/HarnaidanEntrance.jpg'
					},
					{
						'name': 'Shili',
						'url': 'https://elcomercio.pe/resizer/_42nxVSfDhfKZrmbwmJgZzZHKyc=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BEVMD5F725F4FFQS323DA6DX6U.png'
					},
					{
						'name': 'Kalee',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/b/b6/NotTenochtitlan-TEoR.jpg'
					},
					{
						'name': 'Umbara',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/9/9f/UmbaraSystem-DoU.jpg'
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