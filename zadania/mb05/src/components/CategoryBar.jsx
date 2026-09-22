function CategoryBar() {
    return (
        <div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
            <button
                type="button"
                aria-pressed="true"
                className="btn btn-outline-primary active">
                Wszystkie
            </button>
            <button className="btn btn-outline-primary" type="button">
                Góry
            </button>
            <button className="btn btn-outline-primary" type="button">
                Morze
            </button>
            <button className="btn btn-outline-primary" type="button">
                Miasto
            </button>
        </div>
    )
}

export default CategoryBar