import React from "react";
import { Carousel } from "../component/carousel";

export const Home = () => (
	<>
		<div className="text-center mt-5">
			<h1>in a galaxy far, far away...</h1>
		</div>
		<br/>
		<Carousel path={'people'}/>
	</>
);
