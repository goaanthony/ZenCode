const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;


// Importation des routes
const homeRoutes = require('./backend/route/home.js');
const editRoutes = require('./backend/route/edit.js')

// Fichiers statiques front
app.use(express.static(path.join(__dirname, './frontend')));

// Route page d'accueil
app.use('/', homeRoutes);

// Route Edit de fichier 
app.use('/edit', editRoutes)

// start serveur
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Sauvegarder
app.use(express.json());
app.post('/save', (req, res) => {
    const { fileName, content } = req.body;
    if (!fileName || !content) {
        return res.status(400).json({ message: 'Nom ou contenu du fichier manquant.' });
    }
    const savePath = path.join(__dirname, './views', fileName);
    fs.writeFile(savePath, content, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erreur lors de l\'écriture du fichier.' });
        }
        res.json({ message: `Fichier "${fileName}" sauvegardé avec succès.` });
    });
});