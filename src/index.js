import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserHistory, HashRouter, Route} from 'react-router-dom';
import Application from "./components/Application";
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/toastr/build/toastr.min.css";

const title = 'My Minimal React Webpack and Redux Babel Setup';


ReactDOM.render(
  <HashRouter history={BrowserHistory}>
    <Route path="/" title={title} render={props => <Application {...props} title={title}/>}/>
  </HashRouter>,
  document.getElementById('root')
);

module.hot.accept();