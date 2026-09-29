const KATEGORIE = [
    { value: 'gory', label: 'Góry' },
    { value: 'morze', label: 'Morze' },
    { value: 'miasto', label: 'Miasto' }
]

function CategoryBar({ aktywna, onWybierz }) {
    return (
        <div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
            <button
                type="button"
                onClick={() => onWybierz('wszystkie')}
                aria-pressed={aktywna === 'wszystkie'}
                className={`btn btn-outline-primary ${aktywna === 'wszystkie' ? 'active' : ''}`}>
                Wszystkie
            </button>

            {
                KATEGORIE.map(kategoria => (
                    <button
                        key={kategoria.value}
                        type="button"
                        onClick={() => onWybierz(kategoria.value)}
                        aria-pressed={aktywna === kategoria.value}
                        className={`btn btn-outline-primary ${aktywna === kategoria.value ? 'active' : ''}`}>
                        {kategoria.label}
                    </button>
                ))
            }
        </div>
    )
}

export default CategoryBar