/**
 * BACKEND DE JSON-SERVER
 *
 * Pasar a una función nueva!!!
 */
const postFilmsJson = async (newFilm, id) => {
    try {
        const res = await fetch("http://localhost:4000/films", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
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
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default postFilmsJson;
