import React, { useContext } from "react";
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
			{store.counter.people < 10 ?
				<button type="button" className="btn btn-primary btn-secondary mt-2" onClick={() => actions.loadmore('people')}>Load more...</button>:
				null
			}
		</div>
	);
};
