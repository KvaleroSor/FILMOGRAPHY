import Film from "./../../models/films.js";

const deleteFilm = async (id) => {
    try {
        const result = await Film.findByIdAndDelete(id);
        console.log("EXITO - PELÍCULA ELIMIADA CORRECTAMENTE");
        return result;
    } catch (err) {
        console.log("ERROR - NO SE HA PODIDO ELIMINAR LA PELÍCULA");
        console.error(err);
        throw err;
    }
};

export default deleteFilm;
