import Genre from './../../models/genres.js';

const deleteGenre = async (id) => {
    try {
        const result = await Genre.findByIdAndDelete(id);
        console.log("EXITO - GÉNERO ELIMIADO CORRECTAMENTE");
        return result;
    } catch (err) {
        console.log("ERROR - NO SE HA PODIDO ELIMINAR EL GÉNERO");
        console.error(err);
        throw err;
    }
};

export default deleteGenre;