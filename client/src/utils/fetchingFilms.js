import getFilms from "./../functions/getFilms.js";

const fetchingFilms = async () => {
    try {
        const data = await getFilms();
        console.log(data);
        return data.data;
    } catch (err) {
        console.log(err);
    }
};

export default fetchingFilms;
