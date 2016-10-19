import React from 'react';
import fetchWeather from '../data/api';
import { connect } from 'react-redux';

const capitalize = (val) => {
  let newVal = '';
  if (val) {
    const splitWords = val.split(' ');
    for (let i = 0, len = splitWords.length; i < len; i++) {
      let word = splitWords[i];
      if (word) {
        newVal += word[0].toUpperCase() + word.slice(1);
        if (i < len - 1) {
          newVal += ' ';
        }
      }
    }
  }
  return newVal;
}

const mapStateToProps = (state) => {
  const data = state.weatherData;
  return {
    name: data.data.name,
    modifiedInput: data.query,
    inputActive: data.isEnteringLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, val) => {
      val = val.trim();
      e.preventDefault();
      dispatch(fetchWeather(val))
    },
    modifyLocationInput: (e) => {
      e.target.value = capitalize(e.target.value);
      console.log(e.target.value);
      dispatch({
        type: 'CHANGE_LOCATION_INPUT',
        query: e.target.value
      })
    },
    openInput: () => {
      dispatch({
        type: 'ACTIVATE_SEARCH_INPUT'
      });
    }
  }
}

const NameSearch = ({
  name,
  modifiedInput,
  inputActive,
  openInput,
  handleSubmit,
  modifyLocationInput
}) => {

  return (
    <div>
      { !inputActive &&
        <h1 className="location-name"
          onClick={ openInput }>
          { name }
          <i className="fa fa-search search-icon"></i>
        </h1>
      }
      { inputActive &&

        <form className="location-input-form"
          onSubmit={ (e) => {
            handleSubmit(e, modifiedInput);
          }
        }>

          <input
            id="locationInput"
            className="location-input"
            placeholder="Enter a city"
            defaultValue={ name }
            onChange={ modifyLocationInput }
            autoFocus />

          <button id="locationInputSubmit" type="submit" className="location-input-button">
            <i id="locationInputIcon" className="fa fa-search search-icon form-search-icon"></i>
          </button>

        </form>
      }
    </div>
  );
}


const NameSearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NameSearch);

export default NameSearchContainer;