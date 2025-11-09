/**
 * 🧑🏽‍💻 Anotaciones
 *
 * TAREAS PENDIENTES
 *
 * 1- Cuando creemos una película y seleccionemos el género, cuando pulsemos sobre el género que
 * se quede seleccionado de otro color.
 *
 * 2- Cuando pulsemos el género de la película y se seleccione, que añada al postFilm.js en el obj
 * que mandamos a mongoDB el id del genero.
 *
 * 3- Cuando editemos una película que los generos de la pelicula salgan seleccionados y si se pulsa
 * sobre ellos que se desseleccionen.
 *
 * 4- Afegir funcionalitat a la eliminació del genre.
 *
 */

const Genre = ({ id, name, color, isSelectedGenre, setIsSelectedGenre }) => {
    const handleClick = () => {
        if (isSelectedGenre.includes(id)) {
            setIsSelectedGenre(isSelectedGenre.filter((genre) => genre !== id));
            console.log(isSelectedGenre);
        } else {
            setIsSelectedGenre([...isSelectedGenre, id]);
            console.log(isSelectedGenre);
        }
    };

    const isSelected = isSelectedGenre.includes(id);

    return (
        <div
            className="p-2 px-5 rounded-md bg-indigo-700 text-indigo-300 cursor-pointer flex flex-row h-[3rem]"
            style={{ backgroundColor: color }}
        >
            <div className="p-2 self-center">
                <button
                    type="button"
                    onClick={handleClick}
                    className={`${
                        isSelected
                            ? "ring-2 ring-white scale-105"
                            : "opacity-70"
                    }`}
                >
                    {name}
                </button>
            </div>
            <div className="self-center pl-2">
                <button>X</button>
            </div>
        </div>
    );
};

export default Genre;

//   ┌────────────────────────────┐
//   │        FormNewFilm         │
//   │────────────────────────────│
//   │ useState: selectedGenres[] │
//   │ handleSubmit()             │
//   │                            │
//   └──────────────┬─────────────┘
//                  │ (props)
//                  ▼
//   ┌────────────────────────────┐
//   │         GenreList          │
//   │────────────────────────────│
//   │ recibe selectedGenres,     │
//   │ setSelectedGenres          │
//   │                            │
//   └──────────────┬─────────────┘
//                  │ (map)
//                  ▼
//   ┌────────────────────────────┐
//   │           Genre            │
//   │────────────────────────────│
//   │ props: id, name, color     │
//   │ props: selectedGenres,     │
//   │        setSelectedGenres   │
//   │                            │
//   │ onClick() → toggle id      │
//   │                            │
//   └────────────────────────────┘
