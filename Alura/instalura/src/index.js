import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/reset.css';
import './css/timeline.css';
import * as serviceWorker from './serviceWorker';
import './css/login.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import Login from './componentes/Login';
import Logout from './componentes/Logout';

function verificaAutenticacao(Component){
    return (localStorage.getItem('auth-token') === null) ? (
        <Redirect to={{
            pathname: '/',        
            state:{msg:'usuário não autenticado'}
          }}/>
    ) : (
        Component
    );
}


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/timeline" render={() => verificaAutenticacao(<App />)} />
            <Route path="/logout" component={Logout} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
