// serveur/serveur.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Importation des routes
const homeRoutes = require('../backend/route/home');
const editRoutes = require('../backend/route/edit')

// Fichiers statiques front
app.use(express.static(path.join(__dirname, '../frontend')));

// Route page d'accueil
app.use('/', homeRoutes);

// Route Edit de fichier 
app.use('/edit', )

// start serveur
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
