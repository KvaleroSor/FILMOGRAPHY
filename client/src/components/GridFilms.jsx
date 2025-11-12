import { useContext } from "react";
import FilmContext from "./../context/film/FilmContext.jsx";
import Film from "./Film.jsx";

const GridFilms = ({
    setIsRefresh,
    isRefresh,
    setIsButtonUpdateClicked,
    setIsData,
}) => {
    const { isFilms, isLoading, isError } = useContext(FilmContext);

    if (isLoading) return <h1 className="text-white">Cargando películas...</h1>;
    if (isError) return <h1 className="text-red-500">{isError}</h1>;
    if (!isFilms || isFilms.length === 0)
        return <h1 className="text-gray-400">No hay películas aún</h1>;

    return (
        <div className="mx-3 mt-6 flex flex-row flex-wrap place-content-center gap-3">
            {isFilms.map((film) => (
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
