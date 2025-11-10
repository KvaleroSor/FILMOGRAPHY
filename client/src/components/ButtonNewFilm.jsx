const ButtonNewFilm = ({typeButton}) => {
    return (
        <button className="button-crear-pelicula p-2 px-5 rounded-md bg-indigo-700 text-indigo-300 cursor-pointer">
            {typeButton}
        </button>
    );
};

export default ButtonNewFilm;
