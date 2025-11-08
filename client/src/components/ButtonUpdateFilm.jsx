const ButtonUpdateFilm = ({ onClick }) => {
    return (
        <button
            className="button-crear-pelicula p-2 px-5 rounded-md bg-indigo-700 text-indigo-300 cursor-pointer"
            onClick={onClick}
        >
            Update
        </button>
    );
};

export default ButtonUpdateFilm;
