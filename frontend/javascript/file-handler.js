import { getEditor } from './editor.js';
import { setLanguageFromExtension } from './language-service.js';

let originalContent = '';
let recentFiles = [];

export function setupFileHandlers() {
    const fileInput = document.getElementById('fileInput');
    const fileNameInput = document.getElementById('fileNameInput');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const historyContainer = document.getElementById('history');
    const editor = getEditor();

    // Événement : changement du nom de fichier => mise à jour de la langue
    fileNameInput.addEventListener('input', function() {
        if (this.value.trim() && editor) {
            setLanguageFromExtension(this.value.trim(), editor);
        }
    });

    // Événement : chargement d'un fichier depuis l'input
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;
        fileNameInput.value = file.name;
        const reader = new FileReader();
        reader.onload = function (e) {
            const content = e.target.result;
            editor.setValue(content);
            setLanguageFromExtension(file.name, editor);
            originalContent = content;
            recentFiles.push({ name: file.name, content });
            if (recentFiles.length > 20) recentFiles.shift();
            updateHistoryUI();
        };
        reader.readAsText(file, 'UTF-8');
    });

    // Événement : sauvegarde du fichier courant
    saveBtn.addEventListener('click', () => {
        const content = editor.getValue();
        const fileName = fileNameInput.value.trim();
        if (!fileName) {
            alert('Veuillez entrer un nom de fichier avant de sauvegarder.');
            return;
        }
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    });

    // Événement : réinitialisation du contenu de l'éditeur
    resetBtn.addEventListener('click', () => {
        editor.setValue(originalContent || '');
    });

    // Met à jour l'affichage de l'historique des fichiers récents
    function updateHistoryUI() {
        historyContainer.innerHTML = '';
        recentFiles.slice().reverse().forEach(file => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.textContent = file.name;
            div.addEventListener('click', () => {
                editor.setValue(file.content);
                fileNameInput.value = file.name;
                setLanguageFromExtension(file.name, editor);
                originalContent = file.content;
            });
            historyContainer.appendChild(div);
        });
    }
}

export { recentFiles };
