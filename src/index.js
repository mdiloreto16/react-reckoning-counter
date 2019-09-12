import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBA8kRXqKFqLXuZ1xK28Lgle4vsqa9Wly0",
    authDomain: "farming-counter-2.firebaseapp.com",
    databaseURL: "https://farming-counter-2.firebaseio.com",
    projectId: "farming-counter-2",
    storageBucket: "farming-counter-2.appspot.com",
    messagingSenderId: "689972728745",
    appId: "1:689972728745:web:9f422ed5b8f337d6176ab8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
