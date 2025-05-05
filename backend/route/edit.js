const express = require('express');
const path = require('path');
const router = express.Router();

app.router('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/edit.html'));
});

module.exports = router;



