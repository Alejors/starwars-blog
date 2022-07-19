import React, { useContext } from "react";
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
		{store.counter.planets < 7 ?
				<button type="button" className="btn btn-primary btn-secondary mt-2" onClick={() => actions.loadmore('planets')}>Load more...</button>:
				null
			}
	</div>
	);
};
