import deleteFilms from "../functions/deleteFilms.js";

const ButtonDeleteFilm = ({ id }) => {
    const handleClick = async (e) => {
        const res = await deleteFilms(id);
        console.log(res);
    };
    return (
        <button
            className="button-delete_film text-indigo-300 cursor-pointer text-xl"
            onClick={(e) => {
                handleClick(e);
            }}
        >
            X
        </button>
    );
};

export default ButtonDeleteFilm;
