import { Router } from "express";
import updateFilm from "../../functions/func_films/updateFIlm.js";

const router = Router();

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const paramsToUpdate = req.body;

        if (!id || !paramsToUpdate) {
            res.status(400).send();
        }

        const updatedFilm = await updateFilm(id, paramsToUpdate);

        !updatedFilm
            ? res.status(404).json({
                  mensaje: "ERROR - NO SE HA PODIDO ACTUALIZAR LA PELÍCULA",
              })
            : res.status(200).json({
                  mensaje: "EXITO - PELÍCULA ACTUALIZADA",
                  data_recibed: paramsToUpdate,
                  data: updatedFilm,
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
