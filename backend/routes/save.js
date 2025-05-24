const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post('/', (req, res) => {
    const { fileName, content } = req.body;
    if (!fileName || !content) {
        return res.status(400).send('Nom ou contenu du fichier manquant.');
    }
    const savePath = path.join(__dirname, 'saved_files', fileName);
    fs.writeFile(savePath, content, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la sauvegarde.');
        }
        res.send(`Fichier "${fileName}" sauvegardé avec succès.`);
    });
});

module.exports = router;