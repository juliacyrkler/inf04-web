import { useState } from 'react'
import { zdjeciaStartowe } from './zdjecia.js'

const NAZWY_KATEGORII= { 1: "Kwiaty", 2:"Zwierzęta",3:"Samochody"}
const KATEGORIE = [1,2,3]

function App() {
  const [zdjecia, setZdjecia] = useState(zdjeciaStartowe)
  const [aktywneKategorie, setAktywneKategorie] = useState(KATEGORIE)

  function przelaczAktywneKategorie(kategoria) {
    setAktywneKategorie(aktywne => 
      aktywne.includes(kategoria) ?
      aktywne.filter(k => k !== kategoria) :
      [...aktywne, kategoria]
    )
  }

  function pobierz(id) {
    setZdjecia(zdjecia.map(z => z.id === id ? {...z, downloads: z.downloads + 1} : z))
  }

  const widoczne = zdjecia.filter(zdjecie => aktywneKategorie.includes(zdjecie.category))

  return (
    <div className="container mt-4">
      <h1>Kategorie zdjęć</h1>

      <div className="d-flex flex-wrap gap-3 mb3">
        {KATEGORIE.map(kategoria => (
          <div key={kategoria} className="form-check form-switch">
              <input type="checkbox" id={`kategoria-${kategoria}`}
              className='form-check-input' role='switch' checked={aktywneKategorie.includes(kategoria)}
              onChange={() => przelaczAktywneKategorie(kategoria)} />
              <label htmlFor={`kategoria-${kategoria}`} className="form-check-label">{NAZWY_KATEGORII[kategoria]}</label>
          </div>
        ))}
      </div>

      <div className="row g-3">
        {
          widoczne.map(zdjecie => (
            <div className="col-12 col-md-4 col-sm-6" key={zdjecie.id}>
              <img src={zdjecie.filename} alt={zdjecie.alt} className='img-fluid rounded'/>
              <h4 className="h6 mt-2">Pobrań: {zdjecie.downloads}</h4>
              <button className="btn btn-success btn-sm" onClick={() => pobierz(zdjecie.id)}>Pobierz</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
