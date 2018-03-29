import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage from '../src/components/HomePage';


export default (
  <Switch>
    <Route path="/" exact component={HomePage}/>
    <Redirect to="/"/>
  </Switch>
);
