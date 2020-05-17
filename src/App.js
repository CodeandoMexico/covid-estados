import React from 'react';
import { BrowserRouter, Switch, Redirect, Route, useParams } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import './App.scss';

function State() {
  let { name } = useParams();
  return <h2>{ name }</h2>;
}

function Err404() {
  return <h2>Pagina no encontrada</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={ Home } />
        <Route path="/estado/:name" component={ State } />
        <Route path="/about" component={ About } />
        <Route component={ Err404 } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
