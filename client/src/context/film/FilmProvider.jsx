import FilmContext from "./FilmContext.jsx";
import useFetch from "./../../hooks/films_hooks/useFetch.js";
import { useEffect, useState } from "react";
import {
    postFilm,
    updateFilm as updateFilmApi,
    deleteFilm,
} from "./FilmAction.jsx";

const FilmProvider = ({ children }) => {
    const { isData, isLoading, isError, fetchApi } = useFetch();
    const {
        isData: genreData,
        isLoading: genreLoading,
        isError: genreError,
        fetchGenres
    } = useFetch();
    const [isFilms, setIsFilms] = useState([]);
    const [isGenres, setIsGenres] = useState([]);

    const refreshFilms = async () => {
        const data = await fetchApi();
        if (data) setIsFilms(data.data);
    };

    const refreshGenres = async () => {
        const data = await fetchGenres();
        if (data) setIsGenres(data);
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
