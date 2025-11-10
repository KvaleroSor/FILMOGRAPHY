import mongoose from 'mongoose';

const genreScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    color: {
        type: String,
        required: false,
        default: "blue"
    }
});

const Genre = mongoose.model("Genre", genreScheme);
export default Genre;