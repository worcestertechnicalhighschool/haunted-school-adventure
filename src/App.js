import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: {
        view: 'start'
      },
      player: {
        name: '',
        hp: 100,
        level: 1,
        xp: 0,
        stats: {
          attack: 0,
          magic: 0,
          stealth: 0,
          defense: 0
        }
      },
      enemy: null
    }
  }

  componentDidMount(){
     // load view component
  }

  render(){
    return (
      <main className="App">
        VIEW COMPONENT
      </main>
    );
  }
}

export default App;
