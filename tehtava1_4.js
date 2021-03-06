import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]
  
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
                <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
                <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
                <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
            </div>
        )
    }

    const Yhteensa = (props) => {
        let summa = 0
        props.osat.forEach((osa) => {
            summa+=(osa).tehtavia  
        })
        return (
            <div>
                <p> yhteensä {summa} tehtävää </p>
            </div>
        )
    }

    return (
        <div>
            <Otsikko kurssi={kurssi}/>
            <Sisalto osat={osat}/>
            <Yhteensa osat={osat}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
