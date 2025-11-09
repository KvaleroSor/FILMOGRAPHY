# 🎬 FILMOGRAPHY

---

## 🧰 Projecte desenvolupat amb

### 🧩 Client
- ⚛️ **React + Vite**

### ⚙️ Server
- 🧪 **Json-server**
- 🟢 **Node**
- ⚙️ **Express**
- 💾 **BBDD:** MongoDB (Render)

---

## 🚀 Instruccions d’instal·lació i execució

🗃️ Una vegada descomprimit el directori principal, seguirem aquests passos per a executar cadascuna de les parts del projecte.

---

### 🧠 1️⃣ CLIENT (React + Vite)

📁 **Ruta:** `./client`

```bash
# Instal·lar dependències
npm install

# Executar el servidor de desenvolupament
npm run dev
```

📝 Amb aquests dos passos deuries poder veure el projecte a:  
👉 [http://localhost:5173](http://localhost:5173)

💡 **Nota:**  
Com que la part del servidor està allotjada a **Render**, la primera *fetch* per obtenir totes les pel·lícules pot tardar uns segons mentre el servei s’activa.

Un cop carregada la part visual, el següent pas és fer servir el servidor.

---

### 💾 2️⃣ JSON-SERVER (API simulada)

📁 **Ruta:** `./client/db.json`

```bash
# Executar el servidor local de json-server
npx json-server --watch db.json --port 4000
```

📝 Amb aquest pas deuries veure el resultat de `db.json` a:  
👉 [http://localhost:4000/films](http://localhost:4000/films)

🎬 Es llistaran totes les pel·lícules que hàgem creat des del formulari del client.

---

### 🌐 3️⃣ SERVER (Node + Express + MongoDB)

📁 **Ruta:** `./server`

🛠️ No cal executar cap comandament, ja que el servidor està **desplegat a Render**.  
La resposta de Render, després d’un temps d’inactivitat, pot ser una mica **tardana**.

⏳ **Nota:**  
Si en iniciar el projecte no es carreguen les pel·lícules, cal esperar aproximadament **1 minut**.  
Després d’això, s’haurien de mostrar totes les pel·lícules registrades a la base de dades.

---

## 🌍 Desplegament (Deploy)

🚀 El **backend** està desplegat a **Render**:  
🔗 [https://filmography-w88u.onrender.com](https://filmography-w88u.onrender.com)

💻 El projecte complet està pujat al **repositori de GitHub**:  
🔗 [https://github.com/KvaleroSor/FILMOGRAPHY](https://github.com/KvaleroSor/FILMOGRAPHY)

---

## 🧾 Notes finals

- 🧠 **Render** pot tardar uns segons a respondre després d’un període d’inactivitat.  
- 🧩 **json-server** serveix com a entorn de proves local per emmagatzemar dades de manera ràpida i senzilla.  
- 📦 Les dependències s’instal·len per separat a cada subprojecte (`client`, `server`, `json-server`).  
- 🎯 El projecte mostra el funcionament complet d’una aplicació **Full-Stack** amb React, Node i Mongo, complementada amb una API simulada (`json-server`).
