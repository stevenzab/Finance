require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connecté ✅"))
  .catch(err => console.log(err));

// Routes
app.use("/items", itemRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
