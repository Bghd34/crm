import firebase from "firebase/compat";

import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBeRdhTM681mPi5zu-3I2gF_3VnXgcaV8s",
    authDomain: "crm-linkedin-6efa1.firebaseapp.com",
    projectId: "crm-linkedin-6efa1",
    storageBucket: "crm-linkedin-6efa1.appspot.com",
    messagingSenderId: "81571918137",
    appId: "1:81571918137:web:056230a397b19d997e38e8"
}

firebase.initializeApp(config);

export default firebase;
