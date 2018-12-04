import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchPerson} from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h2>Find your username!</h2>
        <form onSubmit={event => {
            let name = this.input.value.split(" ");
            event.preventDefault();
            this.props.dispatch(fetchPerson(name[0], name[1]));
          }}>
        <input ref={node => {this.input = node}} placeholder="enter a name"></input>
      </form>
      {this.props.person.usernames.map((username, index) => {
        return (
          <div key={index}>{username.content}</div>
        )
      })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let info;
  const person = state;
  if(state.isFetching) {
    info = {
      usernames: state.usernames
    };
  } else {
    info = {
      usernames: state.usernames
    };
  }
  return {
    person: info
  }
}

export default connect(mapStateToProps)(App);
