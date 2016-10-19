import 'babel-polyfill';

export const REQUEST_LOCATION = 'REQUEST_LOCATION';
function requestLocation() {
  return {
    type: REQUEST_LOCATION
  }
}

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
function receiveLocation(pos) {
  return {
    type: RECEIVE_LOCATION,
    position: {
      coordinates: {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
    }
  }
}

export const REJECT_LOCATION = 'REJECT_LOCATION';
function rejectLocation() {
  return {
    type: REJECT_LOCATION
  }
}

export default function locate() {
  return dispatch => {

    if (navigator.geolocation) {

      dispatch(requestLocation());

      function geolocate() {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      }

      return geolocate()
        .then(pos => {
          dispatch(receiveLocation(pos));
        })
        .catch(posErr => {
          console.log('Geolocation rejected');
          dispatch(rejectLocation());
        });

    }

  }
}