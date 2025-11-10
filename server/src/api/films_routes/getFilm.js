import { Router } from "express";
import getFilm from "../../functions/func_films/getFilm.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const films = await getFilm();

        if (!films || films.length === 0) {
            res.status(204).send();
        }
        res.status(200).json({
            mensaje: "EXITO - PELÍCULAS ENCONTRADAS",
            data: films,
        });
    } catch (err) {
        res.status(500).json({
            mesaje: "ERROR - ERROR DEL SERVIDOR",
        });
    }
});

export default router;
