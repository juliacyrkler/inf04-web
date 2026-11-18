import { useState } from 'react'
import {przepisyStartowe} from './przepisy.js'

function App() {
  const [przepisy, setPrzepisy] = useState(przepisyStartowe)
  const [rosnaco, setRosnaco] = useState(true)
  const [nazwa, setNazwa] = useState('')
  const [czas, setCzas] = useState('')

  const posortowane = [...przepisy].sort((a,b) => 
    rosnaco ? a.czas - b.czas : b.czas - a.czas
  )

  return (
    <div className="container mt-4">
      <h1>Książka przepisów</h1>

      <button type='button' onClick={() => setRosnaco(!rosnaco)} className="btn btn-outline-primary mb-3">Czas: {rosnaco ? 'rosnąco' : 'malejąco'}</button>

      <div className="row g-3 mb-4">
        {posortowane.map(przepis => (
          <div className="col-12 col-md-4" key={przepis.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">{przepis.nazwa}</h3>
                <span className="badge text-bg-secondary mb-2">{przepis.kategoria}</span>
                <p className="text-body-secondary mb-0">Czas przygotowania: {przepis.czas} min</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className='h4'>Dodaj przepis</h2>

      <form className='mb-5'>
          <div className="mb-3">
            <label htmlFor="nazwa" className='form-label'>Nazwa</label>
            <input type="text" name="nazwa" id="nazwa" className='form-control' onChange={(e) => setNazwa(e.target.value)} value={nazwa}/>
          </div>
          <div className="mb-3">
            <label htmlFor="czas" className='form-label'>Czas przygotowania (min)</label>
            <input type="number" name="czas" id="czas" className='form-control' onChange={(e) => setCzas(e.target.value)} value={czas}/>
          </div>
          <button type="submit" className='btn btn-primary'>Zapisz</button>
      </form>
    </div>
  )
}

export default App
