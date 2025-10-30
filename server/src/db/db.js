import mongoose from 'mongoose';

const db = async () => {
    try{
        const url = "mongodb://localhost:27017/Filmography";
        await mongoose.connect(url);
        console.log(`✅ 🚀 Conectados a la BBDD`);
    }catch(err){
        console.log(`❌ ERROR - No nos hemos podido conectar a la BBDD`);
        console.log(err);
    }
}

export default db;