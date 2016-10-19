import React from 'react';

const Details = ({data}) => {
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  return(
    <div className="weather-details">
      <div className="details-table">
        <div className="details-col">
          { pressure && <h4 className="detail-heading">Pressure</h4> }
          { pressure && <p className="detail-value">{ pressure }</p> }
          { pressure && <p className="detail-unit">hPa</p> }
        </div>
        <div className="details-col">
          { humidity && <h4 className="detail-heading">Humidity</h4> }
          { humidity && <p className="detail-value">{ humidity }</p> }
          { humidity && <p className="detail-unit">%</p> }
        </div>
        <div className="details-col">
          { wind && <h4 className="detail-heading">Wind</h4> }
          { wind && <p className="detail-value">{ wind }</p> }
          { wind && <p className="detail-unit">m/s</p> }
        </div>
      </div>
    </div>
  );
};

export default Details;