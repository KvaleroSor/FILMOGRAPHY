import { API_URI_GENRE } from "./../../elements/elements.js";

const getGenres = async () => {
    const res = await fetch(API_URI_GENRE);

    if (!res.ok)
        throw new Error("ERROR - NO SE HAN PODIDO OBTENER LOS GÉNEROS");

    return await res.json().data;
};

export default getGenres;