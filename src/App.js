import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import firebase from "firebase";

class App extends Component{
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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }


}

export default App;
