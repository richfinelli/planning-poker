import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GamePicker from "./GamePicker";
import Game from './Game';
import YourName from "./YourName";

class Router extends React.Component {

  state = {
    user: null,
    games: {}
  };
  addGame = theGame => {
    const games = { ...this.state.games };
    games[`game${Date.now()}`] = theGame;
    this.setState({ games });
  };
  addUser = theUser => {
    const user = theUser;
    this.setState({ user });

  };
  addUserToGame = theUser => {
    const user = theUser;
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/" render={() => {
              return <GamePicker addGame={this.addGame} games={this.state.games} />;
            }}
          />
          <Route
            exact path="/game/:gameId/:yourName" render={() => {
              return <Game user={this.state.user} games={this.state.games} />;
            }}
          />
          <Route
            exact path="/your-name/:gameId" render={() => {
              return <YourName addUser={this.addUser} addUserToGame={this.addUserToGame} user={this.state.user} />;
            }}
          />
        </Switch>
      </BrowserRouter>

    );
  };
};
export default Router;