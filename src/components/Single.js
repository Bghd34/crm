import React from "react";

const Single = (props) => {
    return(
        <div className="col s12 l6">
            <div className="card">

                <div className="card-image">
                    <img src="portrait.jpg" alt={props.item.title} />
                    <span className="card-title">{props.item.prenom} {props.item.nom} - {props.item.compagnie}</span>
                </div>

                <div className="card-content">

                </div>

            </div>
        </div>
    );
}

export default Single;
