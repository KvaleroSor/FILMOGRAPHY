import { API_URI_GENRE } from "../elements/elements.js";

const deleteGenre = async (id) => {
    const res = await fetch(`${API_URI_GENRE}/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(
            "ERROR - NO SE HA PODIDO BORRAR EL GÉNERO"
        );
    }

    return data;
};

export default deleteGenre;