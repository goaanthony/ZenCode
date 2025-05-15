import { setLanguageFromExtension } from './language-service.js';

let editor;

export function initializeEditor() {
    require(['vs/editor/editor.main'], function () {
        editor = monaco.editor.create(document.getElementById('editor-container'), {
            value: '',
            language: 'plaintext',
            theme: 'vs-dark',
            automaticLayout: true
        });

        // Définir la langue si un nom de fichier est déjà présent
        const fileName = document.getElementById('fileNameInput').value.trim();
        if (fileName) {
            setLanguageFromExtension(fileName, editor);
        }
    });
}

export function getEditor() {
    return editor;
}