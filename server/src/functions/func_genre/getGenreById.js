import Genre from './../../models/genres.js';

const getGenreById = async (id) => {
    const genre = await Genre.findById({id});
    return genre;
};

export default getGenreById;