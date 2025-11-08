import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
    },
    year: {
        type: String,
        required: true,
    },
    film_poster: {
        type: String,
        required: true,
    },
    genres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Genre",
            required: false,
        },
    ],
});

const Film = mongoose.model("Film", filmSchema);
export default Film;
