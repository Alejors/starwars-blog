import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import '../../styles/individual.css';

export const Individual = props => {
    const { store } = useContext(Context);
    const params = useParams();
    const history = useHistory();
    const attributes = Object.keys(store[params.who][params.where]);
    const filteredattributes = attributes.filter((ele, id) => id < 9);
    const found = store.images[params.who].find(element => element.name === store[params.who][params.where].name);

    return (
        <div className="container-fluid">
            <h1 className="ms-2">
                learn more about:
            </h1>
            <div id="individualinfo" className="row m-2 bg-secondary bg-opacity-75 overflow-scroll">
                <div className="col-md-6 px-0">
                    <img id='individualimage' className="img-fluid" src={found.url} />
                </div>
                <div className="col-md-6 mt-5">
                    <ul>
                        {!!filteredattributes &&
                        filteredattributes.length > 0 && 
                        filteredattributes.map((att, i) => (
                            <li key={i}><span className="normaltext">{att.replace(/_/g," ")}: </span><span className="normaltext"> {store[params.who][params.where][att]}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="btn btn-secondary ms-2" onClick={() => history.push(`/${params.who}`)}>Back</button>
        </div>
    )
}