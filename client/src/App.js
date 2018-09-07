/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
import React, { Component } from 'react';
import Card from './components/Cards';
import Nav from './components/Nav';
let Characters = require('./characters.json');


class App extends Component {
  state = {
    characters: [],
    picked: [],
    highScore: 0,
    score: 0,
    correct: false
  };

  componentDidMount() {
    this.shuffle();
  };

  shuffle() {
    this.setState({
      characters: []
    });

    Characters.forEach(character => {
      Math.floor((Math.random * 4) + 1) % 2 ? this.push(character) : this.unshift(character);
    });

    Characters = this.state.characters;
  };

  push(character) {
    this.setState({
      characters: this.state.characters.push(character)
    });
  };

  unshift(character) {
    this.setState({
      characters: this.state.characters.unshift(character)
    });
  };

  handleInput(value) {
    this.state.picked.includes(value) ? this.incorrect() : this.correct(value);
  }

  incorrect() {
    this.setState({
      picked: [],
      score: 0,
      correct: false
    });

    this.shuffle();
  };

  correct(value) {
    this.setState({
      picked: this.state.picked.push(value),
      correct: true,
      score: this.state.score + 1
    })

  };

  render() {
    return (
      <div>
        <Nav string={"You Win!"}/>
        <div className="container">
          {Characters.map(({ id, name, image }) => {
            return (<Card
              click={() => { this.handleInput(id) }}
              img={image}
              name={name}
            />)
          })}
        </div>

      </div>
    );
  }
}

export default App;
