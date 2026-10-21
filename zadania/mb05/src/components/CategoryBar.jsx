const KATEGORIE = [
    { value: 'wszystkie', label: 'Wszystkie'},
    { value: 'gory', label: 'Góry' },
    { value: 'morze', label: 'Morze' },
    { value: 'miasto', label: 'Miasto' }
]

function CategoryBar({ aktywna, onWybierz }) {
    return (
        <div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
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