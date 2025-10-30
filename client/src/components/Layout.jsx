import FormNewFilm from "./FormNewFilm.jsx";
import GridFilms from "./GridFilms.jsx";
import Header from "./Header.jsx";

const Layout = () => {
    return (
        <div className="grid grid-flow-dense grid-cols-1 auto-rows-auto place-content-center h-screen gap-4">
            <Header />
            <FormNewFilm />
            <GridFilms />
        </div>
    );
};

export default Layout;
