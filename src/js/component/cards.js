import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ item, index, location }) => {
    const attributes = Object.keys(item);
    const { actions } = useContext(Context);

    return (
        <div className="col">
            <div className="card bg-dark">
                <img src="https://dummyimage.com/500x300/bdbdbd/fff" className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-text justify-content-between normaltext">
                        <ul>
                            <li>
                                {attributes[1].replace(/_/g," ")}: {item[attributes[1]]}
                            </li>
                            <li>
                                {attributes[2].replace(/_/g," ")}: {item[attributes[2]]}
                            </li>
                            <li>
                                {attributes[3].replace(/_/g," ")}: {item[attributes[3]]}
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to={`/${location}/${index}`} className="btn btn-secondary">Learn more</Link>
                            <div className="ms-auto">
                                <button className="btn btn-secondary" onClick={() => actions.addFavorite(location, index, `${item.name}`)} >
                                    <i className="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}