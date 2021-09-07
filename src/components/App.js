import './App.css';
import {Component} from "react";
import firebase from "firebase/compat";
import data from '../data.json';
import Grid from "./Grid";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {data};
  }

  componentWillUnmount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBeRdhTM681mPi5zu-3I2gF_3VnXgcaV8s",
      authDomain: "crm-linkedin-6efa1.firebaseapp.com",
      projectId: "crm-linkedin-6efa1",
      storageBucket: "crm-linkedin-6efa1.appspot.com",
      messagingSenderId: "81571918137",
      appId: "1:81571918137:web:056230a397b19d997e38e8"
    })
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
            <Grid items = {this.state.data}/>
          </div>
        </div>
    );
  }


}

export default App;
