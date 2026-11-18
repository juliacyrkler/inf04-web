import { useState } from 'react'
import { ksiazkiStartowe } from './ksiazki.js'

const GATUNKI = [...new Set(ksiazkiStartowe.map(k => k.gatunek))]

function App() {
  const [ksiazki, setKsiazki] = useState(ksiazkiStartowe)
  const [aktywny, setAktywny] = useState('wszystkie')

  const widoczne = aktywny === 'wszystkie' ? ksiazki : ksiazki.filter(k => k.gatunek === aktywny)

  function przelaczUlubione(id) {
    setKsiazki(ksiazki.map(k => (k.id === id ? {...k, ulubiona: !k.ulubiona} : k)))
  }

  return (
    <div className='container mt-4'>
        <h1>Katalog biblioteki</h1>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <button type='button' onClick={() => setAktywny('wszystkie')} className={`btn btn-outline-primary ${aktywny == 'wszystkie' ? 'active' : ''}`}>wszystkie</button>
          {
            GATUNKI.map(gatunek => (
              <button key={gatunek} type='button' onClick={() => setAktywny(gatunek)} className={`btn btn-outline-primary ${aktywny == gatunek ? 'active' : ''}`}>{gatunek}</button>
            ))
          }
        </div>

        <p className="text-body-secondary">Wyświetlono {widoczne.length} z {ksiazki.length} książek</p>

        <div className="row g-3">
        {
          widoczne.map(ksiazka => (
            <div key={ksiazka.id} className="col-12 col-md-4">
              <div className={`card h-100${ksiazka.dostepna ? ' border-success' : ' border-danger'}`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="card-title h5">{ksiazka.tytul}</h3>
                    <button type='button' className='btn btn-link p-0 fs-4' onClick={() => przelaczUlubione(ksiazka.id)}>{ksiazka.ulubiona ? "★" : "☆"}</button>
                  </div>
                  <p className="text-body-secondary mb-1">{ksiazka.autor}</p>
                  <span className={`badge text-bg-${ksiazka.dostepna?'success':'danger'}`}>{ksiazka.dostepna ? "Dostępna":"Wypożyczona"}</span>
                </div>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default App
