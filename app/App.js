import React from 'react';
import { connect } from 'react-redux';
import getData from './data/data';
import WeatherContainer from './components/Weather';


const mapStateToProps = (state) => {
  return {
    id: state.weatherData.data.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialData: () => {
      dispatch(getData());
    }
  }
}

class App extends React.Component {
  componentDidMount() {
    // Initial data
    if (!this.props.id) {
      this.props.getInitialData();
    }
  }
  render() {
    return (
      <div className="container">

        <h1 className="app-title">weatherizer</h1>

        { this.props.id &&
          <WeatherContainer />
        }

      </div>
    );
  }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);


export default AppContainer;