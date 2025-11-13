import { useContext } from "react";
import FilmContext from "./../context/film/FilmContext.jsx";

const ButtonDeleteFilm = ({ id }) => {
    const { removeFilm } = useContext(FilmContext);

    return (
        <button
            className="button-delete_film text-indigo-300 cursor-pointer text-xl"
            onClick={() => {
                removeFilm(id);
            }}
        >
            X
        </button>
    );
};

export default ButtonDeleteFilm;
