import React from 'react';
import { connect } from 'react-redux';
import { fetchEstados } from './actions';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import About from './About';
import Err404 from './Err404';
import NavMain from './NavMain';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appelr2zBXKCJPWJS/covidmx?api_key=keymOwmuSwgNcTH7p')
    .then((resp) => resp.json())
    .then(data => {
      this.props.fetchEstados(data.records);
      // console.log(JSON.stringify(data.records, null, 2));
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  fetchEstados: objeto => dispatch(fetchEstados(objeto))
});

export default connect(
  null,
  mapDispatchToProps
)(App)
