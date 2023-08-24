
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useData } from "../../DataContext";
import Slogan from "../../components/Slogan/Slogan"


function Home() {
    const { data } = useData();

    return (
        <>
            <div className="slogan-container">
                <Slogan />
            </div>
            <div className="card-container">
                {data.map((appart, id) => (
                    <div className="card-logement" key={id}>
                        <Link className="link-card-logement" to={`/logement/${appart.id}`}>
                            <Card cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home
