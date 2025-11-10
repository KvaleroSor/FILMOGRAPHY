import Genre from './../../models/genres.js';

const getGenre = async () => {
    const genres = await Genre.find({});
    return genres;
};

export default getGenre;