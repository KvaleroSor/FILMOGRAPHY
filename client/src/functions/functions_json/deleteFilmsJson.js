const deleteFilmsJson = async (id) => {
    try {
        const res = await fetch(`http://localhost:4000/films/${id}`, {
            method: "DELETE",            
        });

        if (!res.ok) {
            throw new Error(
                "ERROR - NO SE HA PODIDO BORRAR LA PELÍCULA"
            );
        }
        return await res.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default deleteFilmsJson;