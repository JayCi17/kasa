
import aboutBanner from "../../assets/aboutBanner.png";
import aboutArray from "../../Datas/aboutArray.json"
import Collapse from "../../components/Collapse/collapse"


function About() {
    return (
        <>
            <div className="slogan-container aboutContainer">
                <div className="section1">
                    <img src={aboutBanner} className="slogan" alt="landscape" />
                </div>
            </div>
            <div className="about-collapse-container">
                {aboutArray.map((rule, id) => (
                    <Collapse
                        key={id}
                        aboutTitle={rule.aboutTitle}
                        aboutText={rule.aboutText}
                        aboutStyle="about-style"
                    />
                ))}
            </div>
        </>
    )
}

export default About