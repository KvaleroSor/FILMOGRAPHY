import { Router } from "express";
import getGenre from "../../functions/func_genre/getGenre.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const genres = await getGenre();

        if (!genres || genres.length === 0) {
            res.status(204).send();
        }
        res.status(200).json({
            mensaje: "EXITO - GÉNEROS ENCONTRADAS",
            data: genres,
        });
    } catch (err) {
        res.status(500).json({
            mesaje: "ERROR - ERROR DEL SERVIDOR",
        });
    }
});

export default router;