import React from "react";
import { Carousel } from "../component/carousel";

export const Home = () => (
	<>
		<div className="text-center mt-3">
			<h1>in a galaxy far, far away...</h1>
		</div>
		<br />
		<div className="container-fluid">
			<div className="row">
				<Carousel path={'people'} />
				<Carousel path={'vehicles'} />
				<Carousel path={'planets'} />
			</div>
		</div>
	</>
);
