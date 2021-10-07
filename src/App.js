import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Start from './Start';
import StatAllocator from './StatAllocator';
import Ready from './Ready';

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
    this.setStats = this.setStats.bind(this);
  }

  componentDidMount(){
     // load view component 
  }

  setName( newName ){
    const newState = { player: { ...this.state.player, name: newName }, game: { view: "stats" } }
    this.setState( newState )
  }
  setStats( newStats ){
    const newState = { player: { ...this.state.player, stats: newStats }, game: { view: "ready" } }
    this.setState( newState )
  } 

  render(){
    const viewMode = this.state.game.view;
    const setView = () => {
      switch(viewMode){
        case 'start': return <Start setName={this.setName} />;
        case 'stats': return <StatAllocator stats={this.state.player.stats} setStats={this.setStats} availPts={10} />;
        case 'ready': return <Ready />;
        default: return 'error';
      }
    }
    return (
      <main className="App bg-purple-500 shadow-lg max-w-sm mx-auto">
        { setView() }
      </main>
    );
  }
}

export default App;
