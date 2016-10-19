import React from 'react';
import ReactDOM from 'react-dom';
import getData from './data/data';

import store from './store/index';
import Weather from './components/Weather';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // Initial data
    store.dispatch(getData());
  }
  render() {
    const data = this.props.store.getState();
    const locationData = data.locationData;
    const weatherData = data.weatherData;
    const coords = locationData.coordinates;

    return (
      <div>
        <p>{ coords.lon }</p>
        <p>{ coords.lat }</p>
        { weatherData.data.id && <Weather data={ weatherData.data }/> }
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