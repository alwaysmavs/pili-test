import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routers from './components/Router';
import 'antd/dist/antd.less';

// Render the main component into the dom
ReactDOM.render(
  <Router routes={Routers} history={ hashHistory }/>

  , document.getElementById('app'));
