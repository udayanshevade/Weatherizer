import React from 'react';
import { connect } from 'react-redux';

const adjustTemp = (temp, isCelcius) => {
  const val = temp - 273.15;
  return isCelcius ? Math.round(val) : Math.round((val * 9/5) + 32);
}

const mapStateToProps = (state) => {
  const data = state.weatherData;
  return {
    temp: data.data.main.temp,
    unit: data.tempUnit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTempUnit: () => {
      dispatch({
        type: 'TOGGLE_TEMP_UNIT',
      });
    }
  }
}

const Temperature = ({
  temp,
  unit,
  toggleTempUnit
}) => {
  const isCelcius = unit === 'celcius';
  return (
    <h2 className="temperature" onClick={ toggleTempUnit }>
      { adjustTemp(temp, isCelcius) }
      ° { /* degree symbol: keep */ }
      <span className="temp-unit">{ isCelcius ? 'C' : 'F' }</span>
      <span className="temp-unit temp-unit--flipped">
        { isCelcius ? 'F' : 'C' }
      </span>
    </h2>
  );
}

const TemperatureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Temperature);

export default TemperatureContainer;