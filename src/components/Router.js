import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Homepage from './Homepage';
import Feature from './Feature';
import Playsdk from './Playsdk';
import Pushsdk from './Pushsdk';
import Update from './Update';
import About from './About7';
import Enterprise from './Enterprise';

const Routers = (
  <Router history={ hashHistory }>
    <Route path='/' components={Homepage}></Route>
    <Route path='/feature' components={Feature}></Route>
    <Route path='/playsdk' components={Playsdk}></Route>
    <Route path='/pushsdk' components={Pushsdk}></Route>
    <Route path='/update' components={Update}></Route>
    <Route path='/about' components={About}></Route>
    <Route path='/enterprise' components={Enterprise}></Route>
  </Router>
);

export default Routers;