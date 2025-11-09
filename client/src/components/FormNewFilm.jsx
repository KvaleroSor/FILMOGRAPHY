import { useState, useEffect } from "react";
import ButtonNewFilm from "./ButtonNewFilm";
import postFilms from "../functions/postFilms.js";
import updateFilms from "../functions/updateFilms.js";
import postFilmsJson from "../functions/functions_json/postFilmsJson.js";
import updateFilmsJson from "../functions/functions_json/udpateFilmsJson.js";
import ButtonNewGenre from "./ButtonNewGenre.jsx";
import GenreList from "./GenreList.jsx";
import postGenres from "../functions/functions_fetch_genre/postGenre.js";

const FormNewFilm = ({
    setIsRefresh,
    isButtonUpdateClicked,
    setIsButtonUpdateClicked,
    isData,
}) => {
    const [isTitle, setIsTitle] = useState("");
    const [isYear, setIsYear] = useState("");
    const [isFilmPoster, setIsFilmPoster] = useState("");
    const [isTypeButton, setIsTypeButton] = useState("Crear");
    const [isGenre, setIsGenre] = useState("");
    const [isGenreColor, setIsGenreColor] = useState("");
    const [isButtonGenreClicked, setIsButtonGenreClicked] = useState(false);
    const [isGenreRefresh, setIsGenreRefresh] = useState(false);
    const [isSelectedGenre, setIsSelectedGenre] = useState([]);

    useEffect(() => {
        if (isButtonUpdateClicked && isData) {
            setIsTitle(isData.title);
            setIsYear(isData.year);
            setIsFilmPoster(isData.film_poster);
            setIsTypeButton("Update");
        } else if (isButtonGenreClicked) {
            setIsGenre("");
            setIsGenreColor("");
            setIsButtonGenreClicked(false);
        }
    }, [isButtonUpdateClicked, isData, isButtonGenreClicked]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(isSelectedGenre);

        if (!isButtonUpdateClicked) {
            const newFilm = {
                title: isTitle,
                year: isYear,
                film_poster: isFilmPoster,
                genres: isSelectedGenre,
            };

            setIsTypeButton("Crear");

            const res = await postFilms(newFilm);
            const resJson = await postFilmsJson(newFilm, res.new_film._id);
            console.log(res);
            console.log(resJson);
        } else {
            const newData = {
                title: isTitle,
                year: isYear,
                film_poster: isFilmPoster,
            };
            const res = await updateFilms(isData.id, newData);
            const resJson = await updateFilmsJson(isData.id, newData);
            console.log(res);
            console.log(resJson);
        }

        setIsRefresh((prev) => !prev);
        setIsTitle("");
        setIsYear("");
        setIsFilmPoster("");
        setIsButtonUpdateClicked(false);
        setIsTypeButton("Crear");
        setIsSelectedGenre([]);
    };

    const handleGenre = async () => {
        if (isGenre && isGenreColor) {
            const newGenre = {
                name: isGenre,
                color: isGenreColor,
            };

            const resultPostGenre = await postGenres(newGenre);
            console.log(resultPostGenre);
            setIsButtonGenreClicked(true);
            setIsGenreRefresh(prev => !prev);
        }
    };

    return (
        <div className="w-full h-full grid place-items-center">
            <form
                className="border border-slate-400 rounded-md bg-slate-800 text-slate-300 2xl:w-[100rem] xl:w-[75rem] lg:w-[60rem] md:w-[40rem] sm:w-[40rem] grid grid-flow-dense grid-cols-1 grid-rows-4 gap-4 pl-4 pr-4 pt-4"
                onSubmit={handleSubmit}
            >
                <div
                    className="container-1-form w-full grid grid-cols-2 items-start justify-start gap-6"
                    onSubmit={handleSubmit}
                >
                    <div className="container-1-form_first-elements w-full h-full grid grid-flow-dense grid-rows-2">
                        <label
                            htmlFor="title"
                            className="w-full h-full flex text-slate-600"
                        >
                            NAME
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={isTitle}
                            className="h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 pl-2"
                            placeholder="Film Name"
                            onChange={(e) => {
                                setIsTitle(e.target.value || "");
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
                            value={isYear}
                            className="h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 p-2 pl-2"
                            placeholder="Year"
                            onChange={(e) => {
                                setIsYear(e.target.value || "");
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
                        value={isFilmPoster}
                        className="h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 pl-2"
                        alt="login"
                        placeholder="Film Poster"
                        onChange={(e) => {
                            setIsFilmPoster(e.target.value || "");
                        }}
                    />
                </div>
                <div className="container-3-form w-full h-full grid grid-cols-[40%_60%] grid-flow-dense border p-2 rounded-md border-slate-400">
                    <div className="container-3_1-form w-full h-full grid grid-flow-dense pr-3">
                        <label
                            htmlFor="genre"
                            className="w-full h-full flex text-slate-600"
                        >
                            GENRE
                        </label>
                        <div className="w-full grid grid-cols-[40%_30%_20%]">
                            <input
                                type="text"
                                id="genre"
                                value={isGenre}
                                className="justify-start h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 pl-2"
                                placeholder="Genre"
                                onChange={(e) => {
                                    setIsGenre(e.target.value || "");
                                }}
                            />
                            <input
                                type="text"
                                id="genre_color"
                                value={isGenreColor}
                                className="justify-start h-full w-full rounded-sm border border-slate-400 bg-slate-600 placeholder:text-slate-200 ml-1 pl-2"
                                placeholder="Color genre"
                                onChange={(e) => {
                                    setIsGenreColor(e.target.value || "");
                                }}
                            />
                            <ButtonNewGenre onClick={handleGenre} />
                        </div>
                    </div>
                    <div className="container-3_2-form w-full h-full grid grid-flow-dense">
                        <div className="flex flex-wrap justify-center items-center">
                            <GenreList
                                isGenreRefresh={isGenreRefresh}
                                isSelectedGenre={isSelectedGenre}
                                setIsSelectedGenre={setIsSelectedGenre}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-button-crear_pelicula grid place-content-center">
                    <ButtonNewFilm typeButton={isTypeButton} />
                </div>
            </form>
        </div>
    );
};

export default FormNewFilm;
