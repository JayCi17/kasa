
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import aboutBanner from "../../assets/aboutBanner.png";
import aboutArray from "../../Datas/aboutArray.json"
import Collapse from "../../components/collapse";


function About (){
    return(
        <>
        <div className="en-tête">
            <Header />
        </div>
        <div className="aboutBanner">
            <img src={aboutBanner} className="about-picture" alt="landscape"/>
        </div>
        {aboutArray.map((rule, id)=>(
            <Collapse key={id} aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} aboutStyle="about-style"/>
        ))}
            <Footer />
        </>
    )
}

export default About