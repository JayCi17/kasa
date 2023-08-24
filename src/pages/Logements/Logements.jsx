import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/collapse";
import Host from "../../components/Host/host";
import Tag from "../../components/Tags/tag";
import Rate from "../../components/Rate/Rate";


function Logements() {
    const params = useParams();
    const navigate = useNavigate();
    const { data } = useData();

    const pickedAppart = data.find(({ id }) => id === params.id);
    useEffect(() => {
        if (!pickedAppart) {
            navigate("/404", { state: { message: "Can't get data" } });
        }
    },
        [params.id, navigate, pickedAppart])
    const slidesPics = pickedAppart && pickedAppart.pictures;
    const tags = pickedAppart && pickedAppart.tags;
    const equipments = pickedAppart && pickedAppart.equipments;
    const equip = pickedAppart && equipments.map((item, index) => (
        <li key={index} className="equipList">{item}</li>
    ))
    return (
        pickedAppart && (
            <div key={params.id} className="fichier-container">
                <Carrousel slides={slidesPics} />
                <section className="hostInfo-container">
                    <div className="info_host">
                        <div className="title-container">
                            <h1>{pickedAppart.title}</h1>
                            <h3>{pickedAppart.location}</h3>
                        </div>
                        <div className="tags-container">
                            {tags.map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rate-host-container">
                        <div className="host-container">
                            <Host hostName={pickedAppart.host.name} hostPic={pickedAppart.host.picture} />
                        </div>
                        <div className="rateDiv">
                            <Rate score={pickedAppart.rating} />
                        </div>
                    </div>
                </section>
                <div className="collapse-fiche-container">
                    <Collapse aboutTitle="Description" aboutText={pickedAppart.description} />
                    <Collapse aboutTitle="Equipements" aboutText={equip} />
                </div>
            </div>
        )

    );
}


export default Logements
