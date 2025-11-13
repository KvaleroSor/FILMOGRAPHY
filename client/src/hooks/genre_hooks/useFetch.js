import { API_URI_GENRE } from "./../../elements/elements.js";
import { useState } from "react";

const useFetch = () => {
    const [isData, setIsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const fetchApi = async () => {
        try {
            setIsLoading(true);

            const res = await fetch(API_URI_GENRE);

            if (!res.ok)
                throw new Error(
                    "ERROR - NO SE HAN PODIDO OBTENER LOS GENEROS"
                );

            const res_json = await res.json();
            setIsData(res_json);
            setIsError(null);
            return res_json;
        } catch (err) {
            setIsError(err.message);
        } finally{
            setIsLoading(false);
        }
    };

    return { isData, fetchApi, isLoading, isError };
};

export default useFetch;