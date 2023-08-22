import { useState, useRef, useEffect } from "react"
import Chevron from "../../assets/chevron.png"


function Collapse(props) {
    const [toggle, setToggle] = useState(false);//definition du state du toggle pour gérer l'ouverture fermeture du collapse
    const [height1, setHeight1] = useState();//definition de la hauteur du collapse

    const toggleState = () => {
        //cet fonction modifie la valeur de toggle au click
        setToggle(!toggle);
    };

    const refHeight = useRef();//recupère et conserve la valeur du collapse déplié

    useEffect(() => {
        setHeight1(`${refHeight.current.scrollHeight}px`);
    }, []);

    return (
        //le collpase est replié par default et l'ouvre et le referme au clic
        <div className={`collapse${props.aboutStyle}`}>
            <div onClick={toggleState} className="collapse__visible">
                <h2>{props.aboutTitle}</h2>
                <img className={toggle ? "chevron rotated" : "chevron"} src={Chevron} alt="chevron" />
            </div>
            <div ref={refHeight} className={toggle ? "collapse__toggle-animated" : "collapse__toggle"} style={{ height: toggle ? `${height1}` : "0px" }}>
                <p aria-hidden={toggle ? "true" : "false"} className="paragraphCollapse">{props.aboutText}</p>
            </div>

        </div>
    );

}

export default Collapse