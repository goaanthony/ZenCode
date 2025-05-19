const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const PORT = 8080;
const upload = multer({ dest: 'uploads/' });
const homeRoutes = require('./routes/home.js');
const editRoutes = require('./routes/edit.js');

app.set('html', path.join(__dirname, 'html'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'code')));
app.use('/', homeRoutes);
app.use('/edit', editRoutes);

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Aucun fichier uploadé.');
    }
    const filePath = req.file.path;
    const fileName = req.file.originalname;
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fs.unlinkSync(filePath);
    res.render('edit', { 
        fileName: fileName,
        content: fileContent 
    });
});

app.post('/save', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});