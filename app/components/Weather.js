import React from 'react';
import Details from './Details';
import Main from './Main';
import NameSearch from './NameSearch';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e.target);
    if (this.props.inputActive && e.target.id !== 'locationInput') {
      this.props.closeInput();
    }
  }
  render() {
    const data = this.props.data;
    const date = new Date(data.dt);

    return (
      <section className="weather-content" onClick={ this.handleClick }>
        <header className="weather-header">
          <NameSearch name={data.name}
            openInput={ this.props.openInput }
            newSearch={ this.props.newSearch }
            inputActive={ this.props.inputActive } />
        </header>

        <div onClick={ this.props.closeInput }>

          <Main data={ data } unit={ this.props.unit }
            toggleTempUnit={ this.props.toggleTempUnit }/>

          <Details data={ data }/>

        </div>
      </section>
    );
  }
};

export default Weather;