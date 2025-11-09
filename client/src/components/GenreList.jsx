import { useEffect, useState } from "react";
import getGenres from "../functions/functions_fetch_genre/getGenres.js";
import Genre from "./Genre.jsx";

const GenreList = ({ isGenreRefresh }) => {
    const [isDataGenre, setIsDataGenre] = useState([]);

    useEffect(() => {
        const fetchingGenres = async () => {
            const result = await getGenres();
            console.log("Generos " + result);
            setIsDataGenre(result || []);
        };

        fetchingGenres();        
    }, [isGenreRefresh]);

    return (
        <div className="flex flex-wrap justify-center gap-2">
            {isDataGenre.map((genre) => (
                <Genre key={genre._id} name={genre.name} color={genre.color} />
            ))}
        </div>
    );
};

export default GenreList;
