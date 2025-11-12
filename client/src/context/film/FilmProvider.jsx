import { useState } from "react";
import FilmContext from "./FilmContext.jsx";
import { useFetch } from "./../../hooks/films_hooks/useFetch.js";

const FilmProvider = ({ children }) => {
    const { isData, isLoading, isError, fetchApi } = useFetch();
    const [isFilms, setIsFilms] = useState(null);

    useEffect(() => {
        const getfilms = async () => {
            const data = fetchApi();
            if (data) setIsFilms(data);
        };
        getfilms();
    }, []);

    const contextValue = {
        isFilms,
        setIsFilms,
        isLoading,
        isError,
    };

    return (
        <FilmContext.Provider value={contextValue}>
            {children}
        </FilmContext.Provider>
    );
};

export default FilmProvider;
