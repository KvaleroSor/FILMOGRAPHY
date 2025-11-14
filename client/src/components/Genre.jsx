import { useContext } from "react";
import FilmContext from "./../context/film/FilmContext.jsx";
import deleteGenre from './../functions/functions_fetch_genre/deleteGenre.js';

const Genre = ({ id, name, color, setIsGenreRefresh, isSelectedGenre, setIsSelectedGenre }) => {
    const { refreshGenres } = useContext(FilmContext);

    const handleClick = async (e) => {
        if (e.target.closest("button")) {
            const resDelete = await deleteGenre(id);
            // console.log(resDelete);
            refreshGenres();
            // setIsGenreRefresh(prev => !prev);
            return;
        }
        if (isSelectedGenre.includes(id)) {
            setIsSelectedGenre(isSelectedGenre.filter((genre) => genre !== id));
        } else {
            setIsSelectedGenre([...isSelectedGenre, id]);
        }
    };

    const isSelected = isSelectedGenre.includes(id);

    return (
        <div
            onClick={(e) => handleClick(e)}
            className={`p-2 px-5 rounded-md cursor-pointer flex flex-row h-[3rem] transition-all duration-200
      ${
          isSelected
              ? "ring-2 ring-white scale-105 opacity-100 m-1"
              : "opacity-70 hover:opacity-90"
      }
      
    `}
            style={{ backgroundColor: color }}
        >
            <div className="p-2 self-center text-white font-semibold">
                {name}
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
