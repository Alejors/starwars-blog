import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import '../../styles/individual.css';

export const Individual = props => {
    const { store } = useContext(Context);
    const params = useParams();
    const history = useHistory();
    const attributes = Object.keys(store[params.who][params.where]);

    return (
        <div className="container-fluid">
            <h1>
                learn more about:
            </h1>
            <div className="row m-2 bg-secondary bg-opacity-50">
                <div className="col-md-6 px-0">
                    <img id='individualimage' src="https://dummyimage.com/600x400/bdbdbd/fff" />
                </div>
                <div className="col-md-6">
                    <ul>
                        <li><span>{attributes[0]}</span><br/><span className="normaltext">{store[params.who][params.where][attributes[0]]}</span></li>   
                    </ul>
                </div>
            </div>
            <button className="btn btn-secondary" onClick={() => history.push(`/${params.who}`)}>Back</button>
        </div>
    )
}