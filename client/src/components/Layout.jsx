import { useState } from 'react';
import FormNewFilm from "./FormNewFilm.jsx";
import GridFilms from "./GridFilms.jsx";
import Header from "./Header.jsx";

const Layout = () => {
    const [isRefresh, isSetRefresh] = useState(false);

    return (
        <div className="grid grid-flow-dense grid-cols-1 auto-rows-auto place-content-center h-screen gap-4">
            <Header />
            <FormNewFilm isSetRefresh={isSetRefresh} isRefresh={isRefresh}/>
            <GridFilms isRefresh={isRefresh}/>
        </div>
    );
};

export default Layout;
