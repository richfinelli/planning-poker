import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { getFunName, slugify } from '../helpers'
import "../css/App.css";
import "../css/Game.css";


class YourName extends Component {

  userNameRef = React.createRef();

  createUser = event => {
    event.preventDefault();
    const userName = this.userNameRef.current.value;
    this.props.addUser(userName);
    this.props.addUserToGame(userName)
    this.props.history.push(`/game/${this.props.match.params.gameId}/${slugify(userName)}`);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hello, what's your name?</h1>
        <form onSubmit={this.createUser} className="user-name__container">
          <label htmlFor="user-name">Your name</label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            ref={this.userNameRef}
            placeholder={`i.e. ${getFunName()}`}
          />
          <button type="submit">That's me!</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(YourName);

