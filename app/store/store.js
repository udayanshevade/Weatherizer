import { combineReducers } from 'redux';

const initialWeatherData = {
  data: {},
  tempUnit: 'celcius',
  isFetching: false,
  isEnteringLocation: false
};

const initialLoc = {
  coordinates: {
    lon: '',
    lat: ''
  },
  isLocating: false
};

function weatherData(state = initialWeatherData, action) {
  switch (action.type) {
    case 'REQUEST_WEATHER':
      console.log('REQUESTING WEATHER');
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case 'RECEIVE_WEATHER':
      console.log('WEATHER DATA RECEIVED');
      return Object.assign({}, action.data, {
        tempUnit: state.tempUnit,
        isFetching: action.isFetching
      });
    case 'TOGGLE_TEMP_UNIT':
      console.log('TOGGLING TEMP UNIT');
      const unit = (state.tempUnit === 'celcius') ? 'fahrenheit' : 'celcius';
      return Object.assign({}, state, {
        tempUnit: unit
      });
    case 'ACTIVATE_SEARCH_INPUT':
      console.log('OPENING SEARCH INPUT');
      return Object.assign({}, state, {
        isEnteringLocation: true
      });
    case 'DEACTIVATE_SEARCH_INPUT':
      console.log('CLOSING SEARCH INPUT');
      return Object.assign({}, state, {
        isEnteringLocation: false
      });
    default:
      return state;
  }
}

function locationData(state = initialLoc, action) {
  switch (action.type) {
    case 'REQUEST_LOCATION':
      console.log('REQUESTING LOCATION');
      return Object.assign({}, state, {
        isLocating: true
      });
    case 'RECEIVE_LOCATION':
      console.log('LOCATION RECEIVED');
      return Object.assign({}, action.position, {
        isLocating: false
      });
    case 'REJECT_LOCATION':
      console.log('LOCATION REJECTED');
      return Object.assign({}, state, {
        isLocating: false
      });
    default:
      return initialLoc;
  }
}

const rootReducer = combineReducers({
  weatherData,
  locationData
});

export default rootReducer;