import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const db = async () => {
    const url = process.env.URL_CONNECTION_MONGO_ATLAS;
    try {
        await mongoose.connect(url);
        console.log(`✅ 🚀 Conectados a la BBDD`);
    } catch (err) {
        console.log(`❌ ERROR - No nos hemos podido conectar a la BBDD`);
        console.log(err);
    }
};

export default db;
