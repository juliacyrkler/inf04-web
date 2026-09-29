const NAZWA_KATEGORII = { gory: "Góry", morze: "Morze", miasto: "Miasto" }
const KOLOR_KATEGORII = { gory: "success", morze: "primary", miasto: "dark" }

function PhotoCard({ id, title, description, category, image, alt, favourite, onUsun, onPrzelacz }) {
    return (
        <div className="card h-100 shadow-sm">
            <img src={image} alt={alt} className="card-img-top" />
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                    <h3 className="card-title h5">{title}</h3>
                    <button className="btn btn-link p-0 fs-4 lh-1"
                        type="button"
                        onClick={onPrzelacz}
                        aria-label={favourite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                        aria-pressed={favourite}>
                        {
                            favourite ? (<i className="bi bi-star-fill text-warning" />) : (<i className="bi bi-star" />)
                        }
                    </button>
                </div>
                <p>
                    <span className={`badge text-bg-${KOLOR_KATEGORII[category]}`}>
                        {NAZWA_KATEGORII[category]}
                    </span>
                </p>
                <p className="card-text text-body-secondary">
                    {description}
                </p>
                <div className="d-flex mt-auto gap-2">
                    <button type="button"
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#zdjecie${id}`}>Powiększ</button>
                    <button type="button"
                        className="btn btn-outline-danger"
                        onClick={onUsun}
                    >Usuń</button>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard