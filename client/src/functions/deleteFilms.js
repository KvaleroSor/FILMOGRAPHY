import API_URI from "../elements/elements.js";

const deleteFilms = async (id) => {
    const res = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(
            "ERROR - NO SE HA PODIDO BORRAR LA PELÍCULA"
        );
    }

    return data;
};

export default deleteFilms;
