import Genre from './../../models/genres.js';

const getGenre = async (id) => {
    const genre = await Genre.findById({id});
    return genre;
};

export default getGenre;