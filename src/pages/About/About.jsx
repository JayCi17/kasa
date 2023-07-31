
import aboutBanner from "../../assets/aboutBanner.png";
import aboutArray from "../../Datas/aboutArray.json"
import Collapse from "../../components/Collapse/collapse"


function About() {
    return (
        <>
            <div className="aboutBanner">
                <img src={aboutBanner} className="about-picture" alt="landscape" />
            </div>
            {aboutArray.map((rule, id) => (
                <Collapse key={id} aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} aboutStyle="about-style" />
            ))}
        </>
    )
}

export default About