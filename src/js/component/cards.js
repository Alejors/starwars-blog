import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Cards = ({ item, index, location }) => {
    const attributes = Object.keys(item);

    return (
        <div className="col">
            <div className="card bg-dark">
                <img src="https://dummyimage.com/500x300/bdbdbd/fff" className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-text justify-content-between">
                        <ul>
                            <li>
                                {attributes[1]}: {item[attributes[1]]}
                            </li>
                            <li>
                                {attributes[2]}: {item[attributes[2]]}
                            </li>
                            <li>
                                {attributes[3]}: {item[attributes[3]]}
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to={`/${location}/${index}`} className="btn btn-secondary">Learn more</Link>
                            <div className="ms-auto">
                                <Link to="/#" className="btn btn-secondary"><i className="fas fa-heart"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}