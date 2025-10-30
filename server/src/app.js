import express from "express";
import cors from "cors";

import getFilm from "./api/films_routes/getFilm.js";
import postFilm from "./api/films_routes/postFilm.js";
import deleteFilm from "./api/films_routes/deleteFilm.js";
import updateFilm from "./api/films_routes/updateFilm.js";

/*
📘 Códigos de estado HTTP más comunes para Express

|---------|------------------------------|----------------|
| 200 OK                 | Petición correcta (GET, PUT, PATCH, DELETE exitosos). |
| 201 Created            | Recurso creado correctamente (por ejemplo, en un POST). |
| 204 No Content         | Petición correcta pero sin contenido que devolver. |
| 400 Bad Request        | Datos incorrectos o petición mal formada (campos inválidos, JSON mal enviado, etc.). |
| 401 Unauthorized       | El usuario no está autenticado (falta token o credenciales). |
| 403 Forbidden          | El usuario está autenticado pero no tiene permisos. |
| 404 Not Found          | Recurso no encontrado (por ejemplo, libro con ese ID no existe). |
| 409 Conflict           | Conflicto con el estado actual (duplicado, ya existe un registro, etc.). |
| 422 Unprocessable Entity | Datos válidos en formato pero con errores de validación (por ejemplo, campos que no cumplen el schema). |
| 500 Internal Server Error | Error inesperado en el servidor. |
| 503 Service Unavailable | El servidor no puede procesar temporalmente la petición. |

*/

const app = express();

app.use(express.json());
app.use(cors());

/*
|---------|------------------------------|----------------|

✍🏽🎬 RUTES PER AL LES PELÍCULES
*/

app.use("/api/films", getFilm);
app.use("/api/films", postFilm);
app.use("/api/films", deleteFilm);
app.use("/api/films", updateFilm);

export default app;
