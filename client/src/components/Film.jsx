import ButtonDeleteFilm from "./ButtonDeleteFilm";
import ButtonUpdateFilm from "./ButtonUpdateFilm";

const Film = ({ setIsRefresh, setIsButtonUpdateClicked, setIsData, film }) => {
    const { title, year, film_poster, _id, genres } = film;

    const handleUpdateFilm = () => {
        setIsData({
            id: _id,
            title: title,
            year: year,
            film_poster: film_poster,
            genres: genres,
        });

        setIsRefresh((prev) => !prev);
        setIsButtonUpdateClicked(true);
    };

    return (
        <div className="border border-indigo-400 rounded-2xl grid grid-flow-dense grid-cols-1 auto-rows-auto w-52 bg-blue-950">
            <div className="container-button-delete_film flex justify-end pr-2 -mb-2">
                <ButtonDeleteFilm id={_id} setIsRefresh={setIsRefresh} />
            </div>

            <div className="container-image-h1-p_elements">
                <div className="border-2 border-indigo-400 h-48 rounded-lg mx-8 mb-4 overflow-hidden">
                    <img src={film_poster} alt="" className="" />
                </div>
                <div className="grid grid-rows-2 place-items-center text-indigo-300 mb-2 text-center">
                    <h1 className="text-xl">{title}</h1>
                    <p className="text-lg">{year}</p>
                </div>
            </div>

            <div className="container-button-update grid place-content-center mb-5">
                <ButtonUpdateFilm onClick={handleUpdateFilm} />
            </div>
        </div>
    );
};

export default Film;
