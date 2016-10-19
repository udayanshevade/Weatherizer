import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
function requestWeather(coords) {
  return {
    type: REQUEST_WEATHER,
    isFetching: true
  }
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(data) {
  return {
    type: RECEIVE_WEATHER,
    data: data,
    isFetching: false
  }
}

export default function fetchWeather(val) {
  return function(dispatch) {
    let reqURL;

    if (val && typeof val === 'object') {
      // reqURL = `api.openweathermap.org/data/2.5/weather?lat=${val.lat}&lon=${val.lon}`;
      reqURL = './data.json';
    } else {
      console.log(`Querying weather in ${val}`);
      // reqURL = `api.openweathermap.org/data/2.5/weather?q=${val}`;
      reqURL = './data.json';
    }

    dispatch(requestWeather())



    return fetch(reqURL)
    .then(response => response.json())
    .then(data => {
      dispatch(receiveWeather({data: data}))
    }).catch(err =>
      console.log(err)
    );

  }
}