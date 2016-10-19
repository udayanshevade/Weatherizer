import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
function requestWeather(coords) {
  return {
    type: REQUEST_WEATHER,
    coords: coords
  }
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(data) {
  return {
    type: RECEIVE_WEATHER,
    data: data
  }
}

export default function fetchWeather(coords) {
  return function(dispatch) {

    dispatch(requestWeather(coords))

    // const reqURL = `api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}`;

    const reqURL = './data.json';

    return fetch(reqURL)
    .then(response => response.json())
    .then(data => {
      dispatch(receiveWeather({data: data}))
    }).catch(err =>
      console.log(err)
    );

  }
}