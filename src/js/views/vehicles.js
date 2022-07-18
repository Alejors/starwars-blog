import React, { useContext } from "react";
import { Cards } from "../component/cards";

import { Context } from "../store/appContext";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
		<h1>vehicles</h1>
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{!!store.vehicles &&
				store.vehicles.length > 0 &&
				store.vehicles.map((item, i) => (
					<Cards key={i} location={'vehicles'} index={i} item={item} />
				)
				)
			}
		</div>
		<a onClick={() => actions.loadMore()}>Load more...</a>
	</div>
	);
};
