import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/logements.json");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("erreur lors du chargement des données", error);
            }
        };
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext)
}