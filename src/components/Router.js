import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Homepage from './Homepage';
import Feature from './Feature';
import Playsdk from './Playsdk';

const Routers = (
  <Router history={ browserHistory }>
    <Route path='/' components={Homepage}></Route>
    <Route path='/feature' components={Feature}></Route>
    <Route path='/playsdk' components={Playsdk}></Route>
  </Router>
);

export default Routers;