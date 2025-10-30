import ButtonDeleteFilm from "./ButtonDeleteFilm";
import ButtonUpdateFilm from "./ButtonUpdateFilm";

const Film = ({film}) => {
    const {name, year, image} = film;

    return (
        <div className="border border-indigo-400 rounded-2xl grid grid-flow-dense grid-cols-1 auto-rows-auto w-52 bg-blue-950">
            <div className="container-button-delete_film flex justify-end pr-2 -mb-2">
                <ButtonDeleteFilm />
            </div>

            <div className="container-image-h1-p_elements">
                <div className="border-2 border-indigo-400 h-48 rounded-lg mx-8 mb-4 overflow-hidden">
                    <img src={image} alt="" className=""/>
                </div>
                <div className="grid grid-rows-2 place-items-center text-indigo-300 mb-2 ">
                    <h1 className="text-xl">{name}</h1>
                    <p className="text-lg">{year}</p>
                </div>
            </div>

            <div className="container-button-update grid place-content-center mb-5">
                <ButtonUpdateFilm />
            </div>
        </div>
    );
};

export default Film;
