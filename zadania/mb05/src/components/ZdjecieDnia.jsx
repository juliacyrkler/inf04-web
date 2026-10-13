import { useState, useEffect } from "react"

const losoweId = () => Math.floor(Math.random() * 300)

export default function ZdjecieDnia() {
    const [id, setId] = useState(losoweId)
    const [zdjecie, setZdjecie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function pobierz() {
            try {
                const odpowiedz = await fetch(`https://picsum.photos/id/${id}/info`)
                if (!odpowiedz.ok) throw new Error('Błąd serwera: ' + odpowiedz.status)
                const dane = await odpowiedz.json()
                setZdjecie(dane)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        pobierz()
    }, [id])

    return (
        <div className="container mt-5 mb-5">
            <h2>Zdjęcie dnia</h2>
            {zdjecie && (
                <>
                    <img src={`https://picsum.photos/id/${id}/400/250`} alt={zdjecie.author} className="img-fluid rounded" />
                    <p className="text-muted mt-2">Autor: {zdjecie.author}</p>
                </>
            )}

            <button className="btn btn-outline-primary" disabled={isLoading} onClick={() => setId(losoweId)}>
                {isLoading ? 'Losuję...' : 'Losuj nowe zdjęcie'}
            </button>
        </div>
    )
}