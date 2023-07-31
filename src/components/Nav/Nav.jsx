import {Link} from 'react-router-dom'

function nav(){
    return(
        <div className="nav">
            <Link to="/" className="Home">Accueil</Link>
            <Link to="/About" className="About">A Propos</Link>
        </div>
    )
}
export default nav