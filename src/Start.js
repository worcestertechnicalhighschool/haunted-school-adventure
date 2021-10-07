import react, {Component} from 'react';

class Start extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
        }
        this.handleText=this.handleText.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleText(e){
        this.setState( {name: e.target.value })
    }

    handleClick(e){
        this.props.setName(this.state.name);
        console.log(this.state.name);
    }

    render(){
        return(
            <section className="Start">
                <h1>Haunted School Adventure</h1>
                <h2 className="text-yellow-300">Enter a name</h2>
                <input type="text" name="name" onChange={ this.handleText }/>
                <p>{ this.state.name }</p>
                <button onClick={ this.handleClick }>Start</button>
            </section>
        );
    }
}

export default Start;
