import { useRef, useState } from "react";

const gry = [
  "Monopoly",
  "Osadnicy z Catanu",
  "Scrabble",
  "Chińczyk",
  "Ryzyko",
];

function Pozycja({ nazwa }) {
  return (<li>{nazwa}</li>)
}

function App() {
  const imieNazwiskoRef = useRef(null)
  const numerGryRef = useRef(null)
  const [czyBlad, setCzyBlad] = useState({ blad: false, komunikat: '' })

  function handleSubmit(event) {
    event.preventDefault()

    const imieNazwisko = imieNazwiskoRef.current.value
    const numerGry = Number(numerGryRef.current.value)
    const gra = gry[numerGry - 1]

    console.log(imieNazwisko)
    if (gra != undefined) {
      console.log(gra)
      setCzyBlad({ blad: false, komunikat: '' })
    }
    else {
      setCzyBlad({ blad: true, komunikat: 'Nieprawidłowy numer gry planszowej' })
      console.log('Nieprawidłowy numer gry planszowej')
    }
  }

  return (
    <div className="m-2">
      <h1>Liczba gier planszowych: {gry.length}</h1>
      <ol>
        {
          gry.map((gra, index) => (
            <Pozycja key={index} nazwa={gra} />
          ))
        }
      </ol>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="imieNazwisko">Imię i nazwisko:</label><br />
        <input type="text" name="imieNazwisko" id="imieNazwisko" ref={imieNazwiskoRef} className="form-control" /><br />
        <label htmlFor="numerGry">Numer gry planszowej:</label><br />
        <input type="number" name="numerGry" id="imieNaznumerGrywisko" ref={numerGryRef} className="form-control" /><br />
        <button type="submit" className="btn btn-primary">Zatwierdź wybór</button>
      </form>

      {czyBlad.blad && <div className="alert alert-danger my-2">{czyBlad.komunikat}</div>}
    </div>
  )
}

export default App
