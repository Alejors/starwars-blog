import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { People } from "./views/people";
import { Error } from "./views/error";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Vehicles } from "./views/vehicles";
import { Planets } from "./views/planets";
import { Individual } from "./views/individual";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/:who/:where">
							<Individual />
						</Route>
						<Route>
							<Error />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);