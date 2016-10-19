import fetchWeather from './api';
import locate from './search';

export default function getData() {
  return (dispatch, getState) => {
    return dispatch(locate())
      .then(() => {
        const coords = getState().locationData.coordinates;
        console.log(coords);
        return dispatch(fetchWeather(coords));
      });
  };
}