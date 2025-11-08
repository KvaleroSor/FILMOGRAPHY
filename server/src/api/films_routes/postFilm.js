import { Router } from "express";
import postFilm from "../../functions/func_films/postFilm.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const filmToPost = req.body;
        const {title, year, film_poster} = filmToPost;

        if (!title || !year || !film_poster) {
            res.status(204).send();
        }
        const newFilm = await postFilm(filmToPost);

        res.status(200).json({
            mensaje: "EXITO - PELÍCULA CREADA",
            data_recibed: filmToPost,
            new_film: newFilm,
        });
    } catch (err) {
        res.status(500).json({
            mensaje: "ERROR - ERROR INTERNO DEL SERVIDOR",
        });
    }
});

export default router;
