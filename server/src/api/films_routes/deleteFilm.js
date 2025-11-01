import { Router } from "express";
import deleteFilm from "../../functions/func_films/deleteFilm.js";

const router = Router();

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteFilm(id);

        console.log(result);

        if (result) {
            res.status(200).json({
                mensaje: "EXITO - BORRADO CON EXITO",
            });
        } else {
            res.status(404).json({
                mensaje: "ERROR - NO SE HA PODIDO BORRAR LA PELÍCULA",
            });
        }
    } catch (err) {
        res.status(500).json({
            mensaje: "ERROR - ERROR DESDE EL SERVIDOR",
        });
    }
});

export default router;
