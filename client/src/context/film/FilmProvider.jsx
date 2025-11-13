import FilmContext from "./FilmContext.jsx";
import useFetch from "./../../hooks/films_hooks/useFetch.js";
import { useEffect, useState, createContext } from "react";
import { postFilm, updateFilm as updateFilmApi, deleteFilm } from "./FilmAction.jsx";

const FilmProvider = ({ children }) => {
    const { isData, isLoading, isError, fetchApi } = useFetch();
    const [isFilms, setIsFilms] = useState([]);

    const refreshFilms = async () => {
        const data = await fetchApi();
        if (data) setIsFilms(data);
    };

    useEffect(() => {
        refreshFilms();
    }, []);

    const addFilm = async (newFilm) => {
        const filmCreated = await postFilm(newFilm);
        setIsFilms((films) => [...films, filmCreated]);
    };

    const updFilm = async (id, dataFilm) => {
        const filmUdapted = await updateFilmApi(id, dataFilm);
        setIsFilms((prev) =>
            prev.map((film) => (film._id === id ? filmUdapted : film))
        );
    };

    const removeFilm = async (id) => {
        await deleteFilm(id);
        setIsFilms((prev) => prev.filter((film) => film._id !== id));
    };

    const contextValue = {
        isFilms,
        setIsFilms,
        isLoading,
        isError,
        refreshFilms,
        addFilm,
        updFilm,
        removeFilm,
    };

    return (
        <FilmContext.Provider value={contextValue}>
            {children}
        </FilmContext.Provider>
    );
};

export default FilmProvider;
