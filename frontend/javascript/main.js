import { initializeEditor } from './editor.js';
import { setupFileHandlers } from './file-handler.js';

// Configuration de Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

document.addEventListener('DOMContentLoaded', () => {
    initializeEditor();
    setupFileHandlers();
});

// Ouvre/ferme la sidebar
window.toggleSidebar = function() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("mainContent");
    sidebar.classList.toggle("open");
    content.classList.toggle("shift");
};