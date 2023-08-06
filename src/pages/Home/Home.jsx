
import { useEffect, useState } from "react"
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Slogan from "../../components/Slogan/Slogan"

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/logements.json");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('erreur lors du chargement des donées', error)
            }
        }
        fetchData()
    }, [])

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
