import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage.js';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render( jsx, document.getElementById('app')); 
        hasRendered = true;
    }
};

//message tht appears when loading firebase data
ReactDOM.render( <LoadingPage />, document.getElementById('app')); //first arg is the parent component

//runs callback when authentication status changes
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') { //if user's on th elogin page...
            history.push('/dashboard');
        }
    } else{
        store.dispatch(logout());
        renderApp();
        history.push('/'); //on logout, go to login page
    }
});










// class OldSyntax{
//     constructor(){
//         this.name = 'Noe';
//     }
//     getGreeting(){
//         return `Hi. My name is ${this.name}`;
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());
//---------------------------------
//Can avoid 'binding' with new syntax (no need for constructor)
// class NewSyntax{
//     name = 'Nico';
//     getGreeting = () => {
//         return `Hi. my name is ${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());