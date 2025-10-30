import Film from "./Film.jsx";
import { peliculas as films } from "../elements/films.js";

const GridFilms = () => {
    // const [isFilmGot, setIsFilmGot] = Aqúi la consulta a la bbdd ??;
    
    return (
        <div className="mx-3 mt-6 flex flex-row flex-wrap place-content-center gap-3">
            {films.map((film) => (
                <Film key={film.id} film={film} />
            ))}
        </div>
    );
};

export default GridFilms;
