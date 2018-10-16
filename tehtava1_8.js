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
        this.lisaaPositiivinen = this.lisaaPositiivinen.bind(this)
        this.lisaaNegatiivinen = this.lisaaNegatiivinen.bind(this)
        this.lisaaNeutraali = this.lisaaNeutraali.bind(this)

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

        const Button = (props) => {
            return (
                <button onClick={ props.funktio}> {props.teksti}</button>
            )            
        }

        const Buttons = (props) => {
            return (
                <div>
                    <Button funktio={this.lisaaPositiivinen} teksti="hyvä"/> <Button funktio={this.lisaaNeutraali}
                    teksti="neutraali" /> <Button funktio={this.lisaaNegatiivinen} teksti="huono" />
                </div>
            )
        }

        const Statistic = (props) => {
            return (
                <div>
                    <p>{props.teksti} {props.tilasto} {props.yksikko}</p>
                </div>
            )
        }

        const Statistics = (props) => {
            return (
                <div>
                    <h2>statistiikka</h2>
                    <Statistic teksti="postiivisia" tilasto={this.state.postiivisia} />
                    <Statistic teksti="neutraaleja" tilasto={this.state.neutraaleja} />
                    <Statistic teksti="negatiivisia" tilasto={this.state.negatiivisia} />
                    <Statistic teksti="keskiarvo" tilasto={keskiarvo} />
                    <Statistic teksti="postiivisia" tilasto={posOsuus} yksikko="%" />
                </div>
            )
        }

        return (
            <div>
                <h2>anna palautetta</h2>
                <Buttons />
                <Statistics />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root'));