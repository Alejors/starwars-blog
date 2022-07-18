import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../component/cards";

import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
		<h1>planets</h1>
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{!!store.planets &&
				store.planets.length > 0 &&
				store.planets.map((item, i) => (
					<Cards key={i} location={'planets'} item={item} index={i} />
				)
				)
			}
		</div>
	</div>
	);
};
