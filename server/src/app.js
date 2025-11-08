import express from "express";
import cors from "cors";

//Films
import getFilm from "./api/films_routes/getFilm.js";
import postFilm from "./api/films_routes/postFilm.js";
import deleteFilm from "./api/films_routes/deleteFilm.js";
import updateFilm from "./api/films_routes/updateFilm.js";

//Genre
import postGenre from "./api/genre_routes/postGenre.js";

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

export default app;
