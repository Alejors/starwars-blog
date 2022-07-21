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
					//PAGE 1
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
					},
					//PAGE 2
					{
						'name': 'Anakin Skywalker',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/6/6f/Anakin_Skywalker_RotS.png'
					},
					{
						'name': 'Wilhuff Tarkin',
						'url': 'https://pm1.narvii.com/6351/d3230e4459ce0bee7f0b2771ceb8e4e82ab2fd79_hq.jpg'
					},
					{
						'name': 'Chewbacca',
						'url': 'https://www.tonica.la/__export/1608834317696/sites/debate/img/2020/12/24/chewbacca-star-wars-legends.jpg'
					},
					{
						'name': 'Han Solo',
						'url': 'https://im.ziffdavisinternational.com/ign_es/screenshot/default/han-solo-texto_n923.jpg'
					},
					{
						'name': 'Greedo',
						'url': 'https://pm1.narvii.com/6575/8de2864f4f537b5feafa17b7d241811c74c19746_hq.jpg'
					},
					{
						'name': 'Jabba Desilijic Tiure',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/b/be/Jabba.jpg'
					},
					{
						'name': 'Wedge Antilles',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/5/51/Wedge_Antilles.jpg'
					},
					{
						'name': 'Jek Tono Porkins',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/e/eb/JekPorkins-DB.png'
					},
					{
						'name': 'Yoda',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/4/45/Yoda.jpg'
					},
					{
						'name': 'Palpatine',
						'url': 'https://www.edeliranoticias.com/wp-content/uploads/2022/03/Star-Wars-He-aqui-por-que-Palpatine-es-un-hereje.png'
					},
					//PAGE 3
					{
						'name': 'Boba Fett',
						'url': 'https://www.tonica.la/__export/1607107904135/sites/debate/img/2020/12/04/quien-es-boba-fett.jpg'
					},
					{
						'name': 'IG-88',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/0/0a/IG88_Unleashed.jpg'
					},
					{
						'name': 'Bossk',
						'url': 'https://static.wikia.nocookie.net/starwars/images/1/1d/Bossk.png'
					},
					{
						'name': 'Lando Calrissian',
						'url': 'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2016/08/12/3-Lando-1536x864-493364302953.jpg'
					},
					{
						'name': 'Lobot',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg'
					},
					{
						'name': 'Ackbar',
						'url': 'https://pbs.twimg.com/profile_images/952953493182144518/NZF4Y6nE_400x400.jpg'
					},
					{
						'name': 'Mon Mothma',
						'url': 'https://i0.wp.com/modogeeks.com/wp-content/uploads/2016/06/mon-mothma.jpg'
					},
					{
						'name': 'Arvel Crynyd',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/d/de/Arvel-crynyd.jpg'
					},
					{
						'name': 'Wicket Systri Warrick',
						'url': 'https://upload.wikimedia.org/wikipedia/en/e/ee/Wicket_W_Warrick.png'
					},
					{
						'name': 'Nien Nunb',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/nien-nunb-main_1dbef681.jpeg'
					},
					//PAGE 4
					{
						'name': 'Qui-Gon Jinn',
						'url': 'https://sm.ign.com/t/ign_latam/screenshot/default/quigon_kwnb.1280.jpg'
					},
					{
						'name': 'Nute Gunray',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_nutegunray_01_169_9d66ded2.jpeg'
					},
					{
						'name': 'Finis Valorum',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/5/51/ValorumPortrait-SWE.png'
					},
					{
						'name': 'Padmé Amidala',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/0/0d/Reina_Amidala.jpg'
					},
					{
						'name': 'Jar Jar Binks',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg'
					},
					{
						'name': 'Roos Tarpals',
						'url': 'https://i.pinimg.com/originals/b3/b6/95/b3b6957f9c7ccc96c3afdf4857c3f4a5.jpg'
					},
					{
						'name': 'Rugor Nass',
						'url': 'https://medias.spotern.com/spots/w640/60/60361-1532336916.jpg'
					},
					{
						'name': 'Ric Olié',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_ricolie_01_169_f175f81b.jpeg'
					},
					{
						'name': 'Watto',
						'url': 'https://i.pinimg.com/originals/97/a6/c5/97a6c5f3e61b5d8aea7fa8054ead9ed3.jpg'
					},
					{
						'name': 'Sebulba',
						'url': 'http://pm1.narvii.com/6595/44fd8dd5f1745703510b566a331ac66fb7f3ab4f_00.jpg'
					},
					//PAGE 5
					{
						'name': 'Quarsh Panaka',
						'url': 'https://pm1.narvii.com/7428/1287abadee4ddfafc5ccd7fbbe2a0e6f08839647r1-320-400v2_hq.jpg'
					},
					{
						'name': 'Shmi Skywalker',
						'url': 'https://static.wikia.nocookie.net/starwars/images/1/17/Shmi_FF.png'
					},
					{
						'name': 'Darth Maul',
						'url': 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/05/star-wars-darth-maul-1945895.jpg'
					},
					{
						'name': 'Bib Fortuna',
						'url': 'https://www.rebelscum.com/2021/Bib_Fortuna_1.jpg'
					},
					{
						'name': 'Ayla Secura',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/4/4d/Aayla_Secura_SWE.png'
					},
					{
						'name': 'Ratts Tyerel',
						'url': 'https://www.figurerealm.com/userimages/characterprofiles/3000/2696-1-5a58fd82ca048.jpg'
					},
					{
						'name': 'Dud Bolt',
						'url': 'https://static.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png'
					},
					{
						'name': 'Gasgano',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/3/30/Gasgano.jpg'
					},
					{
						'name': 'Ben Quadinaros',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/databank_benquadinaros_01_169_0c77b6a0.jpeg'
					},
					{
						'name': 'Mace Windu',
						'url': 'https://elvortex.com/wp-content/uploads/2020/09/Mace-Windu-ID.jpg'
					},
					//PAGE 6
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					//PAGE 7
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					//PAGE 8
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
					},
					//PAGE 9
					{
						'name': '',
						'url': ''
					},
					{
						'name': '',
						'url': ''
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
					},
					//PAGE 2
					{
						'name': 'Bantha-II cargo skiff',
						'url': 'https://static.wikia.nocookie.net/headhuntersholosuite/images/c/ce/Bantha-II_cargo_skiff.jpg'
					},
					{
						'name': 'TIE/IN interceptor',
						'url': 'https://static.wikia.nocookie.net/battlefront/images/d/d9/TIEinterceptor_Main.jpg'
					},
					{
						'name': 'Imperial Speeder Bike',
						'url': 'https://static.wikia.nocookie.net/starwars/images/4/47/Speeder_Bike_DICE.png'
					},
					{
						'name': 'Vulture Droid',
						'url': 'https://i.pinimg.com/originals/9d/b8/df/9db8df72fab1abb2cde2fa98d1005af9.jpg'
					},
					{
						'name': 'Multi-Troop Transport',
						'url': 'https://static.wikia.nocookie.net/starwars/images/a/ab/MTT_BF2.png'
					},
					{
						'name': 'Armored Assault Tank',
						'url': 'https://static.wikia.nocookie.net/starwars/images/c/c9/AAT_BF2.png'
					},
					{
						'name': 'Single Trooper Aerial Platform',
						'url': 'https://static.wikia.nocookie.net/starwars/images/2/28/ST-STAPs.jpg'
					},
					{
						'name': 'C-9979 landing craft',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/C9979_ep1ig.jpg'
					},
					{
						'name': 'Tribubble bongo',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/2/2d/Bongo_1.jpg'
					},
					{
						'name': 'Sith speeder',
						'url': 'https://bbts1.azureedge.net/images/p/full/2017/10/70940dc8-62cb-4f95-aa91-1a680344b8d5.jpg'
					},
					//PAGE 3
					{
						'name': 'Zephyr-G swoop bike',
						'url': 'https://cdnb.artstation.com/p/assets/images/images/022/606/397/large/brandon-robinson-robinsonb-assignment-3-exterior-1.jpg'
					},
					{
						'name': 'Koro-2 Exodrive airspeeder',
						'url': 'https://static.wikia.nocookie.net/starwars/images/2/22/Koro2_uvg.jpg'
					},
					{
						'name': 'XJ-6 airspeeder',
						'url': 'https://static.wikia.nocookie.net/starwars/images/2/25/Hotrod-NEGVV.jpg'
					},
					{
						'name': 'LAAT/i',
						'url': 'https://i.pinimg.com/originals/2e/8f/97/2e8f975183de8b01c2c6128d28477506.jpg'
					},
					{
						'name': 'LAAT/c',
						'url': 'https://i.pinimg.com/originals/b0/09/6c/b0096ca333a8ed697c39a5d90e14d304.jpg'
					},
					{
						'name': 'AT-TE',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/0/0a/ATTE-ST.jpg'
					},
					{
						'name': 'SPHA',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/2/2a/SPHA-T.JPG'
					},
					{
						'name': 'Flitknot speeder',
						'url': 'http://pm1.narvii.com/7656/0c27ac0d26f2b4b8217d53e63714b1e3ea6aa548r1-701-438v2_uhq.jpg'
					},
					{
						'name': 'Neimoidian shuttle',
						'url': 'https://static.wikia.nocookie.net/starwars/images/f/fe/Armed_Sheathipede_variant.png'
					},
					{
						'name': 'Geonosian starfighter',
						'url': 'https://static.wikia.nocookie.net/starwars/images/8/82/Nantex-class_fighters.png'
					},
					//PAGE 4
					{
						'name': 'Tsmeu-6 personal wheel bike',
						'url': 'https://4.bp.blogspot.com/-yO5VABQYd7A/Tm1EUXo37aI/AAAAAAAAFAI/ngJ7Yj1VDg8/s1600/vehiculo-starwars.jpg'
					},
					{
						'name': 'Emergency Firespeeder',
						'url': 'https://3.bp.blogspot.com/-JMCkSEfdGvs/WZWcMG1c0JI/AAAAAAAAHlU/qx8wy9aeAO8SgpwSgDvsO3tCmNFWAmd6ACLcBGAs/s1600/Firespeeders.jpg'
					},
					{
						'name': 'Droid tri-fighter',
						'url': 'https://media.sketchfab.com/models/2517de834ad7418ea367ecdacd13524c/thumbnails/2cf49cc2919b41f6a3089fd160de3d5c/4fb58fb65f504b3a84b51ce90ab67ed6.jpeg'
					},
					{
						'name': 'Oevvaor jet catamaran',
						'url': 'https://lumiere-a.akamaihd.net/v1/images/wookiee-catamaran_ae2deacf.jpeg'
					},
					{
						'name': 'Raddaugh Gnasp fluttercraft',
						'url': 'https://static.wikia.nocookie.net/starwars/images/d/dc/Catamaran.jpg'
					},
					{
						'name': 'Clone turbo tank',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/f/f7/JuggernautROTS.jpg'
					},
					{
						'name': 'Corporate Alliance tank droid',
						'url': 'https://res.cloudinary.com/csicdn/image/upload/c_pad,fl_lossy,h_350,q_auto,w_350/v1/Images/Products/Misc%20Art/Star%20Wars%20Miniatures/full/BH003.jpg'
					},
					{
						'name': 'Droid gunship',
						'url': 'https://static.wikia.nocookie.net/esstarwars/images/6/6d/DroidGunship-DB.png'
					},
					{
						'name': 'AT-RT',
						'url': 'https://i.pinimg.com/originals/d3/bf/39/d3bf39eb2fbf06fa8d545eaeb3f15d9a.jpg'
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