


function Card({ cover, title }) {
    return (
        <article className="card">
            <img src={cover} alt="logement" />
            <div className="logement-caption">
                <p className="title">{title}</p>
            </div>
        </article>
    )
}

export default Card