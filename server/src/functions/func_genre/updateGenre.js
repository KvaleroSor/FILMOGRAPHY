import Genre from './../../models/genres.js';

const updateGenre = async (id, paramsFilmToUpdate) => {
    try {
        const updatedGenre = await Genre.findByIdAndUpdate(id, paramsFilmToUpdate, {
            new: true,
            runValidators: true,
        });
        return updatedGenre;
    } catch (err) {
        console.log(`ERROR - NO SE HA PODIDO ACTUALIZAR EL GÉNERO`);
        console.error(err);
        throw err;
    }
};

export default updateGenre;