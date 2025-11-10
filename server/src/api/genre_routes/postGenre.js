import { Router } from "express";
import postGenre from './../../functions/func_genre/postGenre.js';

const router = Router();

router.post("/", async (req, res) => {
    try {
        const genreToPost = req.body;
        const { name } = genreToPost;

        if (!name) {
            res.status(204).send();
        }
        const newGenre = await postGenre(genreToPost);

        res.status(200).json({
            mensaje: "EXITO - GÉNERO CREADO",
            data_recibed: genreToPost,
            new_film: newGenre,
        });
    } catch (err) {
        res.status(500).json({
            mensaje: "ERROR - ERROR INTERNO DEL SERVIDOR",
        });
    }
});

export default router;