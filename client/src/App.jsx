/**
 * 
 * 
 * La idea és que creeu aquesta plantilla a partir de components tenint en compte aquestes idees:
 *
 * ➡️ El formulari és el component FormNewFilm.
 * ➡️ El grid de pel·lícules es el component GridFilms.
 * ➡️ La carta de cada pel·lícula és el component Film
 * ➡️ GridFilms s'ompli amb un map d'un array d'objectes amb el component Film.
 * ➡️ Tots els botons que apareixen per Crear, Eliminar (X) i Update son components independents.
 * ➡️ Vos passe un example del fitxer amb les dades del array.
 * ➡️ Aquesta setmana en les tutories anem resolent dubtes.
 + 
 * Paciència amb React!!!
 *
 * 📅 TASQUES PENDENTS 
 * 
 * 1. Formulari
 * 1.1 - Arrpelgar dades del formulari.
 * 1.2 - Crear una nova film a través d´eixes dades.
 *  
 * 2. Eliminar film
 * 
 * 3. Editar les dades d´una film.
 */

/**
 * ***************************************************** *
 *                        IMPORTS                        *
 * ***************************************************** *
 */

import Layout from "./components/Layout.jsx";

/**
 * ***************************************************** *
 *                        FUNCIÓ PRINCIPAL               *
 * ***************************************************** *
 */

function App() {
    return <Layout />;
}

export default App;
