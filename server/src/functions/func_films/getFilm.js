import Film from './../../models/films.js';

const getFilm = async () => {
    const films = await Film.find({});
    return films;
};

export default getFilm;