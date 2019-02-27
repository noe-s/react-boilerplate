import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC2bz3WzlPvU6geMCQFQObqLO9MguIZRj8",
    authDomain: "expensify-23d0f.firebaseapp.com",
    databaseURL: "https://expensify-23d0f.firebaseio.com",
    projectId: "expensify-23d0f",
    storageBucket: "expensify-23d0f.appspot.com",
    messagingSenderId: "301036620086"
};

firebase.initializeApp(config); //connects to db

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };