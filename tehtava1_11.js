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
                <p>{props.teksti} {props.tilasto} {props.yksikko}</p>                
            )
        }

        const Statistics = (props) => {
            if (this.state.arviointeja === 0) {
                return (
                    <div>
                        <h2>statistiikka</h2>
                        <p>ei yhtään palautetta annettu</p>
                    </div>
                )
            }             
            return (
                <div>
                    <h2>statistiikka</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td><Statistic teksti="postiivisia" /> </td>
                            <td><Statistic tilasto={this.state.postiivisia} /> </td>
                        </tr>
                        <tr>
                            <td><Statistic teksti="neutraaleja" /></td>
                            <td><Statistic tilasto={this.state.neutraaleja} /> </td>
                        </tr>
                        <tr>
                            <td><Statistic teksti="negatiivisia" /></td>
                            <td><Statistic tilasto={this.state.negatiivisia} /> </td>
                        </tr>
                        <tr>
                            <td><Statistic teksti="keskiarvo" /></td>
                            <td><Statistic tilasto={keskiarvo} /></td>
                        </tr>
                        <tr>
                            <td><Statistic teksti="postiivisia" /></td>
                            <td><Statistic tilasto={posOsuus} yksikko="%" /></td>        
                        </tr>
                        </tbody>    
                    </table>                                
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