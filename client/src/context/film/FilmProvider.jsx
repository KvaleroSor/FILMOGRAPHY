import { useState } from "react";
import FilmContext from "./FilmContext.jsx";
import useFetch from "./../../hooks/films_hooks/useFetch.js";
import { useEffect } from 'react';

const FilmProvider = ({ children }) => {
    const { isData, isLoading, isError, fetchApi } = useFetch();
    const [isFilms, setIsFilms] = useState(null);

    const refreshFilms = async () => {
        const data = await fetchApi();
        if(data) setIsFilms(data);
    };

    useEffect(() => {
        const getfilms = async () => {
            const data = await fetchApi();
            if (data) setIsFilms(data);
        };
        getfilms();
    }, []);

    const contextValue = {
        isFilms,
        setIsFilms,
        isLoading,
        isError,
        refreshFilms
    };

    return (
        <FilmContext.Provider value={contextValue}>
            {children}
        </FilmContext.Provider>
    );
};

export default FilmProvider;
