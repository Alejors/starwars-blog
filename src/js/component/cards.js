import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Cards = ({ item, i }) => {
    const store = useContext(Context);

    return (
        <div key={i} className="col">
            <div className="card bg-dark">
                <img src="https://dummyimage.com/500x300/bdbdbd/fff" className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>
                                Height: {item.height}
                            </li>
                            <li>
                                Weight: {item.mass} Kgs
                            </li>
                            <li>
                                Specie: {item.species}
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}