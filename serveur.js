const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

const homeRoute = require('./backend/routes/home.js');
const editRoute = require('./backend/routes/edit.js');
const saveRoute = require('./backend/routes/save.js');
const uploadRoute = require('./backend/routes/upload.js');

app.set('views', path.join(__dirname, 'frontend/html'));
app.set('view engine', 'ejs');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', homeRoute);
app.use('/edit', editRoute);

app.use('/save', saveRoute);
app.use('/upload', uploadRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});