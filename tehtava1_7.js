import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postiivisia: 0,
            neutraaleja: 0,
            negatiivisia: 0,
            arviointeja: 0
        }
    }

    lisaaPositiivinen() {
        this.setState({ postiivisia: this.state.postiivisia + 1 })
        this.setState({ arviointeja: this.state.arviointeja + 1 })
    }

    lisaaNeutraali() {
        this.setState({ neutraaleja: this.state.neutraaleja + 1 })
        this.setState({ arviointeja: this.state.arviointeja + 1 })
    }

    lisaaNegatiivinen() {
        this.setState({ negatiivisia: this.state.negatiivisia + 1 })
        this.setState({ arviointeja: this.state.arviointeja + 1 })
    }

    render() {
        const keskiarvo = (this.state.postiivisia + (this.state.negatiivisia * -1)) / this.state.arviointeja 
        const posOsuus = (this.state.postiivisia / this.state.arviointeja) * 100

        return (
            <div>
                <h2>anna palautetta</h2>
                <button onClick={ this.lisaaPositiivinen.bind(this)}>
                hyvä</button> <button onClick={this.lisaaNeutraali.bind(this)}>
                neutraali</button> <button onClick={this.lisaaNegatiivinen.bind(this)}>huono</button>
                <h2>statistiikka</h2>
                <p>postiivisia {this.state.postiivisia}</p>
                <p>neutraaleja {this.state.neutraaleja}</p>
                <p>negatiivisia {this.state.negatiivisia}</p>
                <p>keskiarvo {keskiarvo} </p>
                <p>postiivisia {posOsuus} %</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root'));