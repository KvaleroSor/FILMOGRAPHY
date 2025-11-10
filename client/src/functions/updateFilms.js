import { API_URI } from "../elements/elements.js";

const updateFilms = async (id, data) => {
    const res = await fetch(`${API_URI}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: data.title,
            year: data.year,
            film_poster: data.film_poster,
            genres: data.genres
        }),
    });

    if (!res.ok) {
        throw new Error("ERROR - NO SE HA PODIDO ACTUALIZAR LA PELÍCULA");
    }

    return await res.json();
};

export default updateFilms;
