import Film from "./../../models/films.js";

const updateFilm = async (id, paramsFilmToUpdate) => {
    try {
        const updatedFilm = await Film.findByIdAndUpdate(id, paramsFilmToUpdate, {
            new: true,
            runValidators: true,
        });
        return updatedFilm;
    } catch (err) {
        console.log(`ERROR - NO SE HA PODIDO ACTUALIZAR LA PELÍCULA`);
        console.error(err);
        throw err;
    }
};

export default updateFilm;
