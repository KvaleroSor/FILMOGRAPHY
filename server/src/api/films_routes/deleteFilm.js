import { Router } from "express";
import deleteFilm from "../../functions/func_films/deleteFilm.js";

const router = Router();

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const res = await deleteFilm(id);

        res
            ? res.status(200).json({
                  mensaje: "EXITO - BORRADO CON EXITO",                  
              })
            : res.status(400).send();
    } catch (err) {
        res.status(500).json({
            mensaje: "ERROR - ERROR DESDE EL SERVIDOR",
        });
    }
});

export default router;
