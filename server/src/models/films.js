import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3
    }, 
    year: {
        type: String,
        required: true,
    },
    film_poster: {
        type: String,
        required: true,        
    }
});

const Film = mongoose.model("Film", filmSchema);
export default Film;