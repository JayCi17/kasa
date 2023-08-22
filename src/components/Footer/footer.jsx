import model from "../../assets/footer.png"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer-container">
            <Link to="*"><img src={model} alt="logo-Kasa" className="logo-Kasa" /></Link>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer