import React from 'react';
import { BrowserRouter, NavLink, Switch, Redirect, Route, useParams } from 'react-router-dom';
import './App.scss';

function Home() {
  return <h2>Home</h2>;
}
function State() {
  let { name } = useParams();
  return <h2>{ name }</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Err404() {
  return <h2>Pagina no encontrada</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
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
