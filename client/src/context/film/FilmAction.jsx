/**
 * @anotation 📝 Este arxiu l´utilitzare´m per escriure les funcions que es comuniquen
 * amb el servidor.
 *
 * Fan la petició desdel el front al back.
 */

import { API_URI } from "./../../elements/elements.js";

const getFilms = async () => {
    const res = await fetch(API_URI);

    if (!res.ok)
        throw new Error("ERROR - NO SE HAN PODIDO OBTENER LAS PELÍCULAS");

    return await res.json();
};

const postFilm = async (data) => {
    const res = await fetch(API_URI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error(
            "ERROR - NO SE HA PODIDO HACER FETCH PARA CREAR LA PELÍCULA"
        );
    }
    return await res.json();
};

const updateFilm = async (id, data) => {
    const res = await fetch(`${API_URI}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("ERROR - NO SE HA PODIDO ACTUALIZAR LA PELÍCULA");
    }

    return await res.json();
};

const deleteFilm = async (id) => {
    const res = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error("ERROR - NO SE HA PODIDO BORRAR LA PELÍCULA");
    }

    return true;
};

export { getFilms, postFilm, updateFilm, deleteFilm };
