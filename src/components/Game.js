import React, { Component } from 'react';
import "../css/App.css";
import "../css/Game.css";


class Game extends Component {
    state = {
        activeCard: null,
        votes: {}
    };
    makeSelection = (cardNumber) => {        
        this.setState({ activeCard: Number(cardNumber) });
    };
    castVote = (cardNumber) => {
        const votes = { ...this.state.votes };
        const yourName = `Richard`;
        votes[yourName] = Number(cardNumber);
        this.setState( { votes });
    }

    estimate = (event) => {
        const cardNumber = event.target.textContent;
        this.makeSelection(cardNumber);
        this.castVote(cardNumber)
    };

  render() {
    const cards = [1, 2, 3, 5, 8, 13];
    return <React.Fragment>
        <h1>Planning Poker</h1>
        <p>Hi, {this.props.user !== null ? `${this.props.user}!` : "dude!"} You're currently in this game: ${this.props.games[]}</p>
        <ul className="playing-cards__container">
          {cards.map(key => {
            return <li key={key}>
                <button className={`playing-cards__card ${this.state.activeCard === key ? "playing-cards__card--active" : ""}`} onClick={this.estimate}>
                  {key}
                </button>
              </li>;
          })}
        </ul>
        <ul className="votes" />
      </React.Fragment>;
  }
}

export default Game;

