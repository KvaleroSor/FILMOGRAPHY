import FilmContext from "./FilmContext.jsx";
import useFetchFilms from "../../hooks/films_hooks/useFetchFilms.js";
import useFetchGenre from "./../../hooks/genre_hooks/useFetchGenre.js";
import { useEffect, useState } from "react";
import {
    postFilm,
    updateFilm as updateFilmApi,
    deleteFilm,
} from "./FilmAction.jsx";

const FilmProvider = ({ children }) => {
    const { isData, isLoading, isError, fetchApi } = useFetchFilms();
    const {
        isData: genreData,
        isLoading: genreLoading,
        isError: genreError,
        fetchApiGenres
    } = useFetchGenre();
    const [isFilms, setIsFilms] = useState([]);
    const [isGenres, setIsGenres] = useState([]);

    const refreshFilms = async () => {
        const data = await fetchApi();
        if (data) setIsFilms(data.data);
    };

    const refreshGenres = async () => {
        const data = await fetchApiGenres();
        if (data) setIsGenres(data.data);
        
    };

    useEffect(() => {
        refreshFilms();
        refreshGenres();
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
        setIsFilms(prev => prev.filter((film) => film._id !== id));
    };

    const contextValue = {
        isFilms,
        isGenres,
        setIsFilms,
        setIsGenres,
        isLoading,
        genreLoading,
        isError,
        genreError,
        refreshFilms,
        refreshGenres,
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
