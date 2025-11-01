import { useState } from "react";
import ButtonNewFilm from "./ButtonNewFilm";
import postFilms from "../functions/postFilms.js";

const FormNewFilm = ({ isRefresh, isSetRefresh }) => {
    const [isTitle, setIsTitle] = useState("");
    const [isYear, setIsYear] = useState("");
    const [isFilmPoster, setIsFilmPoster] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFilm = {
            title: isTitle,
            year: isYear,
            film_poster: isFilmPoster,
        };

        const res = await postFilms(newFilm);
        console.log(res);

        isSetRefresh(!isRefresh);
    };

    return (
        <div className="w-full h-full grid place-items-center">
            <form
                className="border border-slate-400 rounded-md bg-slate-800 text-slate-300 w-[110rem] grid grid-flow-dense grid-cols-1 grid-rows-3 gap-4 pl-4 pr-4 pt-4"
                onSubmit={handleSubmit}
            >
                <div
                    className="container-1-form w-full grid grid-cols-2 items-start justify-start gap-6"
                    onSubmit={handleSubmit}
                >
                    <div className="container-1-form_first-elements w-full h-full grid grid-flow-dense grid-rows-2">
                        <label
                            htmlFor="name"
                            className="w-full h-full flex text-slate-600"
                        >
                            NAME
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 pl-2"
                            placeholder="Film Name"
                            onChange={(e) => {
                                setIsTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className="container-1-form_second-elements w-full h-full grid grid-flow-dense grid-rows-2">
                        <label
                            htmlFor="year"
                            className="w-full h-full text-slate-600"
                        >
                            YEAR
                        </label>
                        <input
                            type="number"
                            id="year"
                            className="h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 p-2 pl-2"
                            placeholder="Year"
                            onChange={(e) => {
                                setIsYear(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="container-2-form w-full h-full grid grid-flow-dense">
                    <label
                        htmlFor="filmPoster"
                        className="w-full h-full text-slate-600"
                    >
                        FILM POSTER
                    </label>
                    <input
                        type="text"
                        id="image"
                        className="h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 pl-2"
                        alt="login"
                        placeholder="Film Poster"
                        onChange={(e) => {
                            setIsFilmPoster(e.target.value);
                        }}
                    />
                </div>
                <div className="container-button-crear_pelicula grid place-content-center">
                    <ButtonNewFilm />
                </div>
            </form>
        </div>
    );
};

export default FormNewFilm;
