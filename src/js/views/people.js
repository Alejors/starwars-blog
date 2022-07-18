import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../component/cards";

import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>people</h1>
			<div className="row row-cols-1 row-cols-md-2 g-4">
				{!!store.people &&
					store.people.length > 0 &&
					store.people.map((item, i) => (
						<Cards key={i} location={'people'} item={item} index={i} />
					)
					)
				}
			</div>
		</div>
	);
};
