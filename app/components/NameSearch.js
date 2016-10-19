import React from 'react';
// import fetchWeather from './data/api';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const data = state.weatherData;
  return {
    name: data.data.name,
    newQuery: data.newQuery,
    inputActive: data.isEnteringLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      console.log(e)
      //dispatch(fetchWeather(name))
    },
    changeLocationInput: (e) => {
      console.log(e);
      dispatch({
        type: 'CHANGE_LOCATION_INPUT'
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
  newQuery,
  inputActive,
  openInput,
  handleSubmit,
  changeLocationInput
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

        <form className="location-input-form" onSubmit={ handleSubmit }>

          <input
            id="locationInput"
            className="location-input"
            placeholder="Enter a city"
            defaultValue={ name }
            value={ newQuery }
            onChange={ changeLocationInput }
            autoFocus />

          <button type="submit" className="location-input-button">
            <i className="fa fa-search search-icon form-search-icon"></i>
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