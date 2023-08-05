import { useState } from "react";
import leftArrow from "../../assets/arrowLeft.png"
import rightArrow from "../../assets/arrowRight.png"


function Carrousel({ slides }) {
    const [current, setCurrent] = useState[0];//index 0 au premier slide
    const lenght = slides.lenght//longueur du tableau en slides

    const nextSlides = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1);//on retourne au premier slide quand on arrive au dernier
    };

    const previousSlides = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1);//on va au dernier slide quand on est au premier
    };

    return (
        <section id="carrousel-container">
            {lenght > 1 && (
                <img src={leftArrow} alt="left" onClick={previousSlides} className="arrowLeft" />
            )}
            {lenght > 1 && (
                <img src={rightArrow} alt="right" onClick={nextSlides} className="arrowRight" />
            )}
            {slides.map((slides, index) => (
                <div key={index} className={current === index ? "slider bl-msk wh-msk active-anim" : "slider bl-msk wh-msk"}>
                    {index === current && <img src={slides} alt="appartement à louer" />}
                    {index === current && (<span className="slider_number">{current + 1}/{lenght}</span>)}
                </div>
            ))}
        </section>
    )
}

export default Carrousel