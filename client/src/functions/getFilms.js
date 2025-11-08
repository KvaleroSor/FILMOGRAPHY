import API_URI from "../elements/elements.js";

const getFilms = async () => {
    const res = await fetch(API_URI);

    if (!res.ok)
        throw new Error("ERROR - NO SE HAN PODIDO OBTENER LAS PELÍCULAS");

    return await res.json();
};

export default getFilms;
