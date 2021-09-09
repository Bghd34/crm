import './App.css';
import {Component} from "react";
import firebase from "firebase/compat";
import data from '../data.json';
import Grid from "./Grid";
import Form from "./Form";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {data};
  }

  componentWillUnmount() {

  }

  render() {
    return (
        <div>
          <div className="navbar-fixed">
            <nav className="blue lighten-2">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Contact</a>
              </div>
            </nav>
          </div>
          <div>
            <Form />
            <Grid items = {this.state.data}/>
          </div>
        </div>
    );
  }


}

export default App;
