import React, { useContext } from "react";
import "../../styles/carousel.css";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Carousel = props => {
    const { store } = useContext(Context);
    const definition = props.path;

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade col-md-4 mt-3 ms-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                {!!store.images[definition] &&
                    store.images[definition].length > 0 &&
                    store.images[definition].map((ele, i) => (
                        <Link to={"/"+[definition]}>
                            <div key={i} className={"carousel-item" + ((i === 0 ? ' active' : ''))}>
                                <img src={ele.url} className="d-block w-100" alt={ele.name} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{ele.name}</h5>
                                    <p>Take a deeper look at the {definition} of starwars</p>
                                </div>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </div>

    )
}