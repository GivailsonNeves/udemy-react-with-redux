import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldactions';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">          
        </header>
        <div>
          <label>{this.props.value}</label>
          <input onChange={this.props.changeValue} value={this.props.value} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);