import deleteFilms from "../functions/deleteFilms.js";
import deleteFilmsJson from "../functions/functions_json/deleteFilmsJson.js";

const ButtonDeleteFilm = ({ id, setIsRefresh }) => {
    const handleClick = async () => {
        const res = await deleteFilms(id);
        // const resJson = await deleteFilmsJson(id);
        // console.log(id);
        console.log(res);
        // console.log(resJson);
        setIsRefresh(prev => !prev);
    };

    return (
        <button
            className="button-delete_film text-indigo-300 cursor-pointer text-xl"
            onClick={() => {
                handleClick();
            }}
        >
            X
        </button>
    );
};

export default ButtonDeleteFilm;
