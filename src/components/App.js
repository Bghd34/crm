import './App.css';
import {Component} from "react";
import firebase from "../firebase";
import data from '../data.json';
import Grid from "./Grid";
import Form from "./Form";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  updateData() {
    const db = firebase.firestore;
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);
    db.collection('contacts').get()
        .then(snapshot => {
          let contacts = [];
          snapshot.forEach(doc =>{
            let contact = Object.assign({id: doc.id}, doc.data());
            contacts.push(contact);
          });
          this.setState({
              contacts: contacts
          });
        })
        .catch(err => {
            console.log('Error!', err);
        })
  }

  componentWillUnmount() {
      this.updateData();
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
            <Grid items = {this.state.contacts}/>
          </div>
        </div>
    );
  }


}

export default App;
