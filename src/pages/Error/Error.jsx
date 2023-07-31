import { Link } from "react-router-dom"

function Error() {
    return (
        <>
            <div className="errorContainer">
                <p className="errorNumber">404</p>
                <p className="errorText">Oups ! La page que vous demandez n'esxiste pas.</p>
                <Link to="/" className="errorLink">Retourner sur la page d'accueil</Link>
            </div>
        </>
    )
}

export default Error;