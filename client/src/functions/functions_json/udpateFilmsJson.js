const updateFilmsJson = async (id, data) => {
    const res = await fetch(`http://localhost:4000/films/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: data.title,
            year: data.year,
            film_poster: data.film_poster,
        }),
    });

    if (!res.ok) {
        throw new Error("ERROR - NO SE HA PODIDO ACTUALIZAR LA PELÍCULA");
    }

    return await res.json();
};

export default updateFilmsJson;