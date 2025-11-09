const ButtonNewGenre = ({ onClick }) => {
    return (
        <button
            type="button"
            className="button-crear-pelicula ml-3 px-3 rounded-md bg-indigo-700 text-indigo-300 cursor-pointer"
            onClick={onClick}
        >
            Genero
        </button>
    );
};

export default ButtonNewGenre;
