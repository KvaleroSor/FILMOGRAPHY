import { Router } from "express";
import updateGenre from "../../functions/func_genre/updateGenre.js";

const router = Router();

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const paramsToUpdate = req.body;

        if (!id || !paramsToUpdate) {
            res.status(400).send();
        }

        const genreUpdated = await updateGenre(id, paramsToUpdate);

        !updatedFilm
            ? res.status(404).json({
                  mensaje: "ERROR - NO SE HA PODIDO ACTUALIZAR EL GÉNERO",
              })
            : res.status(200).json({
                  mensaje: "EXITO - GÉNERO ACTUALIZADO",
                  data_recibed: paramsToUpdate,
                  data: genreUpdated,
              });
    } catch (err) {
        res.status(500).json({
            mensaje: "ERROR - ERROR DESDE EL SERVIDOR",
        });
        console.error(err);
        throw err;
    }
});

export default router;