import React from 'react';

class NameSearch extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  setRef(ref) {
    this.inputRef = ref;
  }
  handleSubmit(e) {
    e.preventDefault();
    let query = this.inputRef.value;
    this.inputRef.value = '';
    this.props.newSearch(query);
  }
  render() {
    return (
      <div>
        { !this.props.inputActive &&
          <h1 className="location-name"
            onClick={ this.props.openInput }>
            { this.props.name }
            <i className="fa fa-search search-icon"></i>
          </h1>
        }
        { this.props.inputActive &&
          <form className="location-input-form" onSubmit={ this.handleSubmit }>
            <input id="locationInput" className="location-input" ref={this.setRef} placeholder="Enter a city" autoFocus defaultValue={ this.props.name }/>
            <button type="submit" className="location-input-button">
              <i className="fa fa-search search-icon form-search-icon"></i>
            </button>
          </form>
        }
      </div>
    );
  }
}

export default NameSearch;