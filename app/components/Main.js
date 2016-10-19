import React from 'react';

const Main = (props) => {
  const data = props.data;
  const unitIsCelcius = props.unit === 'celcius';

  const date = new Date(data.dt);

  const iconId = data.weather[0].id;
  const iconSuffix = date.getHours > 12 ? 'd' : 'n';

  function adjustTemp(temp) {
    const val = temp - 273.15;
    return unitIsCelcius ? Math.round(val) : Math.round((val * 9/5) + 32);
  }

  return (
    <div className="weather-main">
      <div className="temp-container">
        <h2 className="temperature" onClick={ props.toggleTempUnit }>
          { adjustTemp(data.main.temp) }
            &#176;<span className="temp-unit">{ unitIsCelcius ? 'C' : 'F' }</span><span className={"temp-unit temp-unit--flipped"}>{ unitIsCelcius ? 'F' : 'C' }</span>
        </h2>
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