import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }
  
    const Otsikko = (props) => {
        return (
            <div>
                <h1> {props.kurssi}</h1>
            </div>
        )
    }

    const Osa = (props) => {
        return (
            <div>
                <p> {props.osa} {props.tehtavia} </p>
            </div>
        )
    }

    const Sisalto = (props) => {        
        return (          
            <div>
                <Osa osa={osa1.nimi} tehtavia={osa1.tehtavia} />
                <Osa osa={osa2.nimi} tehtavia={osa2.tehtavia} />
                <Osa osa={osa3.nimi} tehtavia={osa3.tehtavia} />
            </div>
        )
    }

    const Yhteensa = (props) => {
        return (
            <div>
                <p> yhteensä {props.summa} tehtävää </p>
            </div>
        )
    }

    return (
        <div>
            <Otsikko kurssi={kurssi}/>
            <Sisalto/>
            <Yhteensa summa={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
