import Film from "./Film.jsx";
import { useState, useEffect } from "react";
// import fetchingFilms from "../utils/fetchingFilms.js";
import getFilms from "./../functions/getFilms.js";

const GridFilms = ({
    setIsRefresh,
    isRefresh,    
    setIsButtonUpdateClicked,
    setIsData,
}) => {
    const [isFilm, setIsFilm] = useState([]);

    const fetchingFilms = async () => {
    try {
        const data = await getFilms();
        console.log(data);
        setIsFilm(data.data);
    } catch (err) {
        console.log(err);
    }
};
    
    useEffect(() => {       
        fetchingFilms();
    }, [isRefresh]);

    return (
        <div className="mx-3 mt-6 flex flex-row flex-wrap place-content-center gap-3">
            {isFilm.map((film) => (
                <Film
                    key={film._id}
                    film={film}
                    setIsRefresh={setIsRefresh}                    
                    setIsButtonUpdateClicked={setIsButtonUpdateClicked}
                    setIsData={setIsData}
                />
            ))}
        </div>
    );
};

export default GridFilms;
