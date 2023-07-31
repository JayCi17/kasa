import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/footer"



function Error() {
    return (
        <>
            <Header />
            <div className="errorContainer">
                <p className="errorNumber">404</p>
                <p className="errorText">Oups ! La page que vous demandez n'esxiste pas.</p>
                <Link to="/" className="errorLink">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    )
}

export default Error;