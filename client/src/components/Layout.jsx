import { useEffect, useState } from "react";
import FormNewFilm from "./FormNewFilm.jsx";
import GridFilms from "./GridFilms.jsx";
import Header from "./Header.jsx";

const Layout = () => {
    const [isRefresh, setIsRefresh] = useState(false);
    const [isData, setIsData] = useState({});
    const [isButtonUpdateClicked, setIsButtonUpdateClicked] = useState(false);

    useEffect(() => {
        console.log("🔄 Refrescando datos globales.");
    }, [isRefresh]);

    return (
        <div className="min-h-screen flex flex-col items-center gap-4 overflow-y-auto bg-slate-900">
            <Header />

            <FormNewFilm
                setIsRefresh={setIsRefresh}
                isButtonUpdateClicked={isButtonUpdateClicked}
                setIsButtonUpdateClicked={setIsButtonUpdateClicked}
                isData={isData}
            />
            <GridFilms
                setIsRefresh={setIsRefresh}
                isRefresh={isRefresh}
                setIsButtonUpdateClicked={setIsButtonUpdateClicked}
                setIsData={setIsData}
            />
        </div>
    );
};

export default Layout;
