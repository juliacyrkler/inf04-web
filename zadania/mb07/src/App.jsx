import { useRef } from "react"

const kursy = [
  "Programowanie w C#",
  "Angular dla początkujących",
  "Kurs Django",
  "Wprowadzenie do SQL"
]

function App() {
  const imieNazwiskoRef = useRef(null)
  const numerKursuRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const imieNazwisko = imieNazwiskoRef.current.value
    const numerKursu = numerKursuRef.current.value
    const kurs = kursy[numerKursu - 1]

    console.log(imieNazwisko)

    if (kurs !== undefined) console.log(kurs)
    else console.log("Nieprawidłowy numer kursu")
  }

  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <h1 className="h3 mb-4">Zapisy na kursy</h1>
      <h2 className="h5">Liczba kursów: {kursy.length}</h2>

      <ol>
        {kursy.map((kurs, index) => (
          <li key={index}>{kurs}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imieNazwisko">Imię i nazwisko</label>
          <input type="text" className="form-control" id="imieNazwisko" ref={imieNazwiskoRef} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="numerKursu">Numer kursu</label>
          <input type="text" className="form-control" id="numerKursu" ref={numerKursuRef} />
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-primary" type="submit">Zapisz do kursu</button>
        </div>
      </form>
    </div>
  )
}

export default App
