# ZenCode

## Description
ZenCode est un éditeur de code en ligne simple et élégant. Il permet de créer, éditer et sauvegarder des fichiers de code dans différents langages de programmation avec coloration syntaxique.

## Fonctionnalités
- Interface épurée et agréable
- Support de multiples langages de programmation
- Coloration syntaxique avec Monaco Editor
- Chargement de fichiers existants
- Sauvegarde de fichiers
- Interface responsive

## Installation
1. Clonez ce dépôt
2. Installez les dépendances avec `npm install`
3. Lancez le serveur avec `node serveur.js`
4. Accédez à l'application via `http://localhost:8080`

## Structure du projet
```
zencode/
├── backend/
│   └── routes/           # Routes Express
├── frontend/
│   ├── css/              # Feuilles de style
│   ├── html/             # Templates EJS
│   └── js/               # Scripts JavaScript
└── serveur.js            # Point d'entrée de l'application
```

## Technologies utilisées
- Node.js
- Express.js
- EJS (templates)
- Monaco Editor
- CSS personnalisé
