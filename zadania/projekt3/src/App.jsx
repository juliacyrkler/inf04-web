import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [rowery, setRowery] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <div className="container mt-4">
      <h1>Wypożyczalnia rowerów</h1>
    
      <div className="row g-3">
        {rowery.map(rower => (
          <div className="col-12 col-md-6" key={rower.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">{rower.model}</h3>
                <span className="badge text-bg-secondary">{rower.typ}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
