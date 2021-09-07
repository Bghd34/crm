import React, {Component} from "react";

class Form extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12" id="addContact">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="prenom" type="text" className="validate" />
                                <label htmlFor="prenom">Prenom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate" />
                            <label htmlFor="nom">Nom</label>
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="compagnie" type="text" className="validate" />
                            <label htmlFor="compagnie">Compagnie</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8">
                            <input id="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
