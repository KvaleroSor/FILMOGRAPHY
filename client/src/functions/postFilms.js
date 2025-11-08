import API_URI from "../elements/elements.js";

const postFilms = async (newFilm) => {
    /**
     * BACKEND DE MONGO EN RENDER
     */

    const res = await fetch(API_URI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: newFilm.title,
            year: newFilm.year,
            film_poster: newFilm.film_poster,
        }),
    });

    if (!res.ok) {
        throw new Error(
            "ERROR - NO SE HA PODIDO HACER FETCH PARA CREAR LA PELÍCULA"
        );
    }
    return await res.json();
};

export default postFilms;
