const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Importation des routes
const homeRoutes = require('./backend/route/home.js');
const editRoutes = require('./backend/route/edit.js')

// Fichiers statiques front
app.use(express.static(path.join(__dirname, '../frontend')));

// Route page d'accueil
app.use('/', homeRoutes);

// Route Edit de fichier 
app.use('/edit', editRoutes)

// start serveur
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
