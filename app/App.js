import React from 'react';
import ReactDOM from 'react-dom';
import getData from './data/data';
import fetchWeather from './data/api';

import store from './store/index';
import Weather from './components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTempUnit = this.toggleTempUnit.bind(this);
    this.openSearchInput = this.openSearchInput.bind(this);
    this.closeSearchInput = this.closeSearchInput.bind(this);
    this.SearchNewLocationWeather = this.SearchNewLocationWeather.bind(this);
  }
  componentDidMount() {
    // Initial data
    this.props.store.dispatch(getData());
  }
  toggleTempUnit() {
    this.props.store.dispatch({
      type: 'TOGGLE_TEMP_UNIT',
    });
  }
  openSearchInput() {
    this.props.store.dispatch({
      type: 'ACTIVATE_SEARCH_INPUT'
    });
  }
  closeSearchInput() {
    if (this.props.store.getState().weatherData.isEnteringLocation) {
      this.props.store.dispatch({
        type: 'DEACTIVATE_SEARCH_INPUT'
      });
    }
  }
  SearchNewLocationWeather(name) {
    this.props.store.dispatch(fetchWeather(name));
  }
  render() {
    const data = this.props.store.getState();
    const locationData = data.locationData;
    const weatherData = data.weatherData;
    const coords = locationData.coordinates;

    return (
      <div className="container">
        <h1 className="app-title">Weather You Know It</h1>
        { weatherData.data.id &&
          <Weather data={ weatherData.data } unit={ weatherData.tempUnit } inputActive={ weatherData.isEnteringLocation } toggleTempUnit={ this.toggleTempUnit }
            openInput={ this.openSearchInput }
            closeInput={ this.closeSearchInput }
            newSearch={ this.SearchNewLocationWeather }/>
        }
      </div>
    );
  }
};

const render = () => {
  ReactDOM.render(
    <App store={ store }/>,
    document.getElementById('app')
  );
}

store.subscribe(render);
render();