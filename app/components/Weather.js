import React from 'react';
import { Link } from 'react-router';
import Details from './Details';
import Main from './Main';
import NameSearchContainer from './NameSearch';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const data = state.weatherData;
  return {
    tempUnit: data.unit,
    data: data.data,
    inputActive: data.isEnteringLocation
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deactivateInput: (e, inputActive) => {
      const excludedIds = `locationInput
        locationInputSubmit locationInputIcon`;
      const idVal = e.target.id;
      if (inputActive &&
        (!excludedIds.includes(e.target.id) || !idVal)) {
          dispatch({
            type: 'DEACTIVATE_SEARCH_INPUT'
          });
      }
    },
  }
}

const Weather = ({
  tempUnit,
  data,
  inputActive,
  deactivateInput
}) => {
  const currentDate = new Date(data.dt).toDateString();
  return (

    <section className="weather-content"
      onClick={
        (e) => {
          deactivateInput(e, inputActive)
        }
      }>

      <header className="weather-header">
        <NameSearchContainer />
      </header>

      <div>

        <p className="current-date">{ currentDate }</p>

        <Main data={ data } unit={tempUnit }/>

        <Link className="forecast-link" to="/forecast">five day forecast <i className="fa fa-long-arrow-right forecast-icon"></i></Link>

        <Details data={ data }/>

      </div>
    </section>
  );
};

const WeatherContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Weather);


export default WeatherContainer;