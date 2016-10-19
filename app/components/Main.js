import React from 'react';
import TemperatureContainer from './Temperature';

const Main = (props) => {
  const data = props.data;

  const date = new Date(data.dt);

  const iconId = data.weather[0].id;
  const iconSuffix = date.getHours > 12 ? 'd' : 'n';


  return (
    <div className="weather-main">
      <div className="temp-container">

        <TemperatureContainer />

      </div>
      <div className="weather-state">
        <i className={`weather-icon owf owf-${iconId}-${iconSuffix}`}></i>
        <h3 className="weather-keyword">
          { data.weather[0].main }
        </h3>
        <p className="weather-description">
          { data.weather[0].description }
        </p>
      </div>
    </div>
  );
}

export default Main;