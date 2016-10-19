import React from 'react';
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

        <Main data={ data } unit={tempUnit }/>

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