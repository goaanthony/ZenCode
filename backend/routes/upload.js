const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
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

module.exports = router;