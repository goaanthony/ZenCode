const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('edit', { 
        fileName: req.query.fileName || 'nouveau_fichier.txt',
        content: req.query.content || '' 
    });
});

module.exports = router;