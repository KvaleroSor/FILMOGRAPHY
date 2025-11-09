import express from "express";
import cors from "cors";

/**
 * 🧑🏽‍💻 Anotaciones
 *
 * TAREAS PENDIENTES
 *
 * 1- Cuando creemos una película y seleccionemos el género, cuando pulsemos sobre el género que
 * se quede seleccionado de otro color ✅
 *
 * 2- Cuando pulsemos el género de la película y se seleccione, que añada al postFilm.js en el obj
 * que mandamos a mongoDB el id del genero ✅
 *
 * 3- Cuando editemos una película que los generos de la pelicula salgan seleccionados y si se pulsa
 * sobre ellos que se desseleccionen ✅
 *
 * 4- Afegir funcionalitat a la eliminació del genre ✅
 *
 * 5- Solucionar la rotura del botón del genero.
 *
 */

//Films
import getFilm from "./api/films_routes/getFilm.js";
import postFilm from "./api/films_routes/postFilm.js";
import deleteFilm from "./api/films_routes/deleteFilm.js";
import updateFilm from "./api/films_routes/updateFilm.js";

//Genre
import postGenre from "./api/genre_routes/postGenre.js";
import getGenre from "./api/genre_routes/getGenre.js";
import updateGenre from "./api/genre_routes/updateGenre.js";
import getGenreById from "./api/genre_routes/getGenreById.js";
import deleteGenre from "./api/genre_routes/deleteGenre.js";

const app = express();

app.use(express.json());
app.use(cors());

/*
|---------|------------------------------|----------------|

✍🏽🎬 RUTES PER AL LES PELÍCULES
*/

app.use("/api/films", getFilm);
app.use("/api/films", postFilm);
app.use("/api/films", deleteFilm);
app.use("/api/films", updateFilm);

/*
|---------|------------------------------|----------------|

✍🏽🎬 RUTES PER ALS GÈNEROS
*/

app.use("/api/genres", postGenre);
app.use("/api/genres", deleteGenre);
app.use("/api/genres", updateGenre);
app.use("/api/genres", getGenre);
app.use("/api/genres", getGenreById);

export default app;
