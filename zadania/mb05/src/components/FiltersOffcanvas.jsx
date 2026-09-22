function FiltersOffcanvas() {
    return (
        <div className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="panelFiltrow"
            aria-labelledby="panelFiltrowania">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title h5" if="panelFiltrowLabel">Filtry</h2>
                <button type="button" className="btn-close"
                    data-bs-dismiss="offcanvas" aria-label="Zamknij"></button>
            </div>

            <div className="offcanvas-body">
                <p className="text-body-secondary">Zaznacz kategorie, które chcesz zobaczyć:</p>

                <div className="form-check">
                    <input type="checkbox" id="filtrGory" className="form-check-input" defaultChecked />
                    <label htmlFor="filtrGory" className="form-check-label">Góry</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="filtrMorze" className="form-check-input" defaultChecked />
                    <label htmlFor="filtrMorze" className="form-check-label">Morze</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" id="filtrMiasto" className="form-check-input" defaultChecked />
                    <label htmlFor="filtrMiasto" className="form-check-label">Miasto</label>
                </div>

                <button type="button" className="btn btn-primary w-100 mt-4" data-bs-dismiss="offcanvas">Zamknij</button>
            </div>
        </div>
    )
}

export default FiltersOffcanvas