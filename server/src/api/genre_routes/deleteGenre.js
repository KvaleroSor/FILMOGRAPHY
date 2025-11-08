import { Router } from "express";
import deleteGenre from "../../functions/func_genre/deleteGenre.js";

const router = Router();

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteGenre(id);

        result
            ? res.status(200).json({
                  mensaje: "EXITO - BORRADO CON EXITO",
              })
            : res.status(404).json({
                  mensaje: "ERROR - NO SE HA PODIDO BORRAR LA PELÍCULA",
              });
    } catch (err) {
        res.status(500).json({
            mensaje: "ERROR - ERROR DESDE EL SERVIDOR",
        });
    }
});

export default router;
