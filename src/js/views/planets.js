import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>planets</h1>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
