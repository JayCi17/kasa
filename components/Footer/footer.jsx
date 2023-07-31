import model from "../../assets/footer.png"

function Footer(){
    return(
        <footer className="footer-container">
            <img src={model} alt="logo-Kasa"/>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer