import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { isEmpty, slugify } from '../helpers';
import '../css/App.css';

class GamePicker extends Component {

  gameNameRef = React.createRef();

  createGame = event => {
    event.preventDefault();
    console.log(this.gameNameRef.current.value);
    this.props.addGame(this.gameNameRef.current.value);
  };
  render() {

    const noGames = isEmpty(this.props.games);
  
    return (
      <div className="App">
        <Header />
        <main>

          <h2>Create new game</h2>
          <form onSubmit={this.createGame} className="game-name__container">
            <label htmlFor="game-name">Game name</label>
            <input
              type="text"
              name="game-name"
              id="game-name"
              ref={this.gameNameRef}
            />
            <button type="submit">Create new game +</button>
          </form>

          <h2>Join existing game</h2>
          <ul className="games">
          
          {noGames ? <li>There are no games right now...</li> : ""}
          {Object.keys(this.props.games).map(key => {
                return <li key={key}>
                    <Link to={{ pathname: `/your-name/${slugify(this.props.games[key])}` }}>
                      {this.props.games[key]}
                    </Link>
                  </li>;
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default GamePicker;
