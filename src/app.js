import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { hashHistory } from 'react-router';
import mainPage from './mainPage.js';
import AlbumPage from './albumPage.js';

let routes = <Router history={hashHistory}>
    <Route path='/' component={mainPage} />
</Router>

ReactDOM.render( routes, document.getElementById('app') );
