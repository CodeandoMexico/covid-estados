import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import About from './About';
import Err404 from './Err404';
import NavMain from './NavMain';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavMain />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={ Home } />
        <Route path="/estado/:name" component={ Detail } />
        <Route path="/sobre-el-proyecto" component={ About } />
        <Route component={ Err404 } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
