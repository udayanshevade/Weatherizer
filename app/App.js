import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import Forecast from './Components/Forecast/Forecast';

import getData from './data/data';
import fetchWeather from './data/api';

import store from './store/index';
import WeatherContainer from './components/Weather';


const mapStateToProps = (state) => {
  return {
    id: state.weatherData.data.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialData: () => {
      dispatch(getData());
    }
  }
}

class App extends React.Component {
  componentDidMount() {
    // Initial data
    console.log(this.props);
    this.props.getInitialData();
  }
  render() {
    return (
      <div className="container">

        <h1 className="app-title">weatherizer</h1>

        { this.props.id &&
          <WeatherContainer />
        }

      </div>
    );
  }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);


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