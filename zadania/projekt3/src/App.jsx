import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [rowery, setRowery] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [szukaj, setSzukaj] = useState('')

  useEffect(() => {
    async function wczytaj() {
      try {
        const odpowiedz = await fetch('/rowery.json')
        const dane = await odpowiedz.json()
        setRowery(dane)
      }
      catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    wczytaj()
  },[])

  const widoczne = rowery.filter(r => r.model.toLowerCase().includes(szukaj.toLowerCase()))

  function usun(id){
    setRowery(rowery.filter(r => r.id !== id))
  }

  if(loading){
    return (
      <div className="container mt-4">
        <div className="spinner-border" role='status'/>
        <span className="ms-2">Ładowanie...</span>
      </div>
    )
  }

  if(error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    )
  }

  if(rowery.length === 0) {
    return (
      <div className="container mt-4">
        <div className="alert alert-secondarys">Brak rowerów.</div>
      </div>
    )
  }


  return (
    <div className="container mt-4">
      <h1>Wypożyczalnia rowerów</h1>
    
      <input type="text" className='form-control mb-3' placeholder='Szukaj po modelu...' value={szukaj} onChange={event => setSzukaj(event.target.value)} />

      {
        widoczne.length === 0 && <div className="alert alert-secondary">Brak wyników</div>
      }

      <div className="row g-3">
        {widoczne.map(rower => (
          <div className="col-12 col-md-6" key={rower.id}>
            <div className={`card h-100${rower.dostepny ? '' : ' opacity-50'}`}>
              <div className="card-body">
                <h3 className="card-title h5">{rower.model}</h3>
                <span className="badge text-bg-secondary mb-3">{rower.typ}</span>
                <div>
                  <button className="btn btn-outline-danger btn-sm" type='button' onClick={() => usun(rower.id)}>Usuń</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
