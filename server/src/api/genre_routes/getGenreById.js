import { Router } from "express";
import getGenreById from "../../functions/func_genre/getGenreById.js";

const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const genre = await getGenreById(id);

        !genre
            ? res.status(204).send()
            : res.status(200).json({
                  mensaje: "EXITO - GÉNERO ENCONTRADO",
                  data: genre,
              });
    } catch (err) {
        res.status(500).json({
            mesaje: "ERROR - ERROR DEL SERVIDOR",
        });
    }
});

export default router;
