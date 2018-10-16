import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0,
        suosituin: NaN,
        aanestys : [0,0,0,0,0,0]
      }

      this.randomValinta = this.randomValinta.bind(this)
      this.annaAani = this.annaAani.bind(this)

      setInterval(() => {
        this.suosituimanPaivitys()}, 10)
    }

    randomValinta() {
      let randomNumero = Math.random() * (anecdotes.length) - 0.5 // Säädin randomin rajaksi -0,5 - 5,5, jotta olisi yhtä todennäköistä, että kaikkia riviejä valitaan.
      let randomNumeroPyoristetty = Math.round(randomNumero)
      this.setState({ selected: randomNumeroPyoristetty})
    }

    annaAani() {
      let kopio = [...this.state.aanestys]
      kopio[this.state.selected] += 1
      this.setState({aanestys: [...kopio]})
    }

    suosituimanPaivitys () { 
      let suosituinAnekdootti = this.state.aanestys[0]
      let suosituimanAnekdootinIndeksi = 0
      for (var i = 0; i < anecdotes.length; i++) {
        if (this.state.aanestys[i] > suosituinAnekdootti) {
          suosituimanAnekdootinIndeksi = i
          suosituinAnekdootti = this.state.aanestys[i]
        }
      }
      this.setState({suosituin: suosituimanAnekdootinIndeksi})
    }
  
    render() {
      const suosituimmanAanimaara = this.state.aanestys[this.state.suosituin]

      return (
        <div>
            <button onClick={ this.annaAani}>vote</button> <button onClick={ this.randomValinta}>next anecdote</button><br/>
            <p>{this.props.anecdotes[this.state.selected]}</p>
            <h2>anecdote with most votes:</h2>
            <p>{this.props.anecdotes[this.state.suosituin]}</p>
            <p>has {suosituimmanAanimaara} votes</p>
        </div>
      )
    }
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )