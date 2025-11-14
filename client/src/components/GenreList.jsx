import { useContext } from "react";
import FilmContext from "./../context/film/FilmContext.jsx";
// import { useEffect, useState } from "react";
// import getGenres from "../functions/functions_fetch_genre/getGenres.js";
import Genre from "./Genre.jsx";

const GenreList = ({
    isGenreRefresh,
    setIsGenreRefresh,
    isSelectedGenre,
    setIsSelectedGenre,
}) => {
    const { isGenres, isLoading, isError } = useContext(FilmContext);
    // const [isDataGenre, setIsDataGenre] = useState([]);

    // useEffect(() => {
    //     const fetchingGenres = async () => {
    //         const result = await getGenres();
    //         console.log("Generos " + result);
    //         setIsDataGenre(result || []);
    //     };

    //     fetchingGenres();
    // }, [isGenreRefresh]);

    if (isLoading) return <h1 className="text-white">Cargando géneros...</h1>;
    if (isError) return <h1 className="text-red-500">{isError}</h1>;
    if (!isGenres || isGenres.length === 0)
        return (
            <h1 className="flex justify-center items-center text-[3rem] text-stone-400">
                No hay géneros aún...!
            </h1>
        );

    return (
        <div className="flex flex-wrap justify-center items-center gap-2">
            {isGenres.map((genre) => (
                <Genre
                    key={genre._id}
                    id={genre._id}
                    name={genre.name}
                    color={genre.color}
                    isSelectedGenre={isSelectedGenre}
                    setIsSelectedGenre={setIsSelectedGenre}
                    setIsGenreRefresh={setIsGenreRefresh}
                />
            ))}
        </div>
    );
};

export default GenreList;
