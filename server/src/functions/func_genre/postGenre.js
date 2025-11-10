import Genre from './../../models/genres.js';

const postGenre = async (genre) => {
    try {
        const { name, color } = genre;

        const newGenre = await Genre.create({
            name: name,
            color: color,
        });

        return newGenre;
    } catch (err) {
        console.log(
            `ERROR - NO SE HA PODIDO CREAR EL GENERO`
        );
        console.error(err);
        throw err;
    }
};

export default postGenre;