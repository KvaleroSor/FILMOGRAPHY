const Genre = ({ name, color }) => {
    return (
        <div className="p-2 px-5 rounded-md bg-indigo-700 text-indigo-300 cursor-pointer">
            <button>{name}</button>
        </div>
    );
};

export default Genre;

/**
 * 🧑🏽‍💻 Anotaciones
 * 
 * TAREAS PENDIENTES
 * 
 * 1- Cuando creemos una película y seleccionemos el género, cuando pulsemos sobre el género que 
 * se quede seleccionado de otro color.
 * 
 * 2- Cuando pulsemos el género de la película y se seleccione, que añada al postFilm.js en el obj 
 * que mandamos a mongoDB el id del genero.
 * 
 * 3- Cuando editemos una película que los generos de la pelicula salgan seleccionados y si se pulsa 
 * sobre ellos que se desseleccionen.
 * 
 */