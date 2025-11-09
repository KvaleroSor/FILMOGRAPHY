import Genre from "./../../models/genres.js";

const getGenreById = async (id) => {
    try {
        const genre = await Genre.findById({ id });
        return genre;
    } catch (err) {
        console.log("❌ ERROR - NO SE HA ENCONTRADO EL GÉNERO | BBDD");
        console.error(err);
        throw err;
    }
};

export default getGenreById;
