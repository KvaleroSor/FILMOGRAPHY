import { API_URI } from "../../elements/elements.js";
import { useState } from "react";

const useUpdate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const updateData = async (id, body) => {
        try {
            const res = await fetch(`${API_URI}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                throw new Error(
                    "ERROR - NO SE HA PODIDO ACTUALIZAR LA PELÍCULA"
                );
            }

            const data = await res.json();
            console.log(data);
            return data;
        } catch (err) {
            setIsError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {updateData, isLoading, isError};
};

export default useUpdate;
