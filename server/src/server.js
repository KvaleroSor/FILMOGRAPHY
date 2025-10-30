import db from './db/db.js';
import app from './app.js';

const PORT = 3002;

const startServer = async() => {
    /**
     * 📖✍🏽 - Anotacions.
     * 
     * 1️⃣ - Conectem amb la BBDD (arxiu que sencontra en /db/db.js).
     * 2️⃣ - Una vegada conectada la BBDD (s´espera perqué estem gastant await) arranquem el servidor.
     * 3️⃣ - Fiquem el port 3001 a l´escolta per poder comunicar-nos amb el server.
     */
    await db();
    
    app.listen(PORT, () => {
        console.log(`✅ 🚀 Servidor escuchando el puerto ${PORT}`);
    });
};

startServer();