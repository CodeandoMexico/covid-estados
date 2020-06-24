import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEstados } from "./actions";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import About from "./About";
import NavMain from "./NavMain";
import Footer from './Footer';
import "./App.scss";

class App extends React.Component {
  
  componentDidMount() {
    const { getEstados } = this.props.actions;
    getEstados();
  }

  render() {
    return (
      <BrowserRouter>
        <NavMain />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={Home} />
          <Route path="/estado/:id" component={Detail} />
          <Route path="/sobre-el-proyecto" component={About} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getEstados,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(App);
