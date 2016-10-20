import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import store from './store/index';
import AppContainer from './App';
import Forecast from './components/Forecast/Forecast';

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }/>
        <Route path="/forecast" component={ Forecast }/>
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <Root store={ store }/>,
  document.getElementById('app')
);