import React from 'react';

const Weather = (props) => {

  const data = props.data;

  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;

  return (
    <section className="weather-content">
      <header className="weather-header">
        <span className="location-subtitle">Weather for:</span>
        <h1 className="location-name">{ data.name }</h1>
      </header>
      <div className="weather-main">
        <img className="weather-icon"
          alt={ `Icon for ${data.weather[0].description}` }
          src={ `http://openweathermap.org/img/w/${data.weather[0].icon}.png` }/>
        <h2 className="temperature">
          { data.main.temp } <span className="temp-unit"></span>
        </h2>
        <h3 className="weather-breakdown">
          { data.weather[0].main }
        </h3>
        <p className="weather-description">
          { data.weather[0].description }
        </p>
      </div>
      <div className="weather-details">
        <table className="details-table">
          <thead>
            <tr>
              { pressure && <th className="detail-heading">Pressure</th> }
              { humidity && <th className="detail-heading">Humidity</th> }
              { wind && <th className="detail-heading">Wind</th> }
            </tr>
          </thead>
          <tbody>
            <tr>
              { pressure && <td className="detail-value">{ pressure }</td> }
              { humidity && <td className="detail-value">{ humidity }</td> }
              { wind && <td className="detail-value">{ wind }</td> }
            </tr>
          </tbody>

        </table>
      </div>
    </section>
  );

};

export default Weather;