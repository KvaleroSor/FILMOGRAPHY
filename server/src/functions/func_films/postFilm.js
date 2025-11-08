import Film from "./../../models/films.js";

const postFilm = async (film) => {
    try {
        const { title, year, film_poster } = film;

        const newFilm = await Film.create({
            title: title,
            year: year,
            film_poster: film_poster,
        });

        return newFilm;
    } catch (err) {
        console.log(
            `ERROR - NO SE HA PODIDO CREAR LA PELÍCULA`
        );
        console.error(err);
        throw err;
    }
};

export default postFilm;
