import { API_URI_GENRE } from "../../elements/elements.js";

const postGenres = async (newGenre) => {
    /**
     * BACKEND DE MONGO EN RENDER
     */

    const res = await fetch(API_URI_GENRE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: newGenre.name,
            color: newGenre.color,
        }),
    });

    if (!res.ok) {
        throw new Error(
            "ERROR - NO SE HA PODIDO HACER FETCH PARA CREAR EL GÉNERO"
        );
    }
    return await res.json();
};

export default postGenres;
