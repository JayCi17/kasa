import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";

function Header(){
    return(
    <div className="header-container">
        <Banner/>
        <Nav/>
    </div>
    )
}

export default Header