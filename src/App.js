import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Start from './Start';

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
    this.setName = this.setName.bind(this);
  }

  componentDidMount(){
     // load view component 
  }

  setName( newName ){
    const newState = { player: { name: newName } }
    this.setState( newState )
    console.log(newName + ' Set!');
  }

  render(){
    const viewMode = this.state.game.view;
    return (
      <main className="App">
        { (viewMode === 'start') ? 
          <Start setName={this.setName} /> : "error"
        }
      </main>
    );
  }
}

export default App;
