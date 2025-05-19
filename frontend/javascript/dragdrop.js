import { recentFiles } from './file-handler.js';

function getLengthFile() {
    return recentFiles.length;
}

function formPopUp() {
    const a = getLengthFile()
    const formfile = document.getElementById("form-drop-area")
    if (a <= 0) {
        formfile.style.display = "block"
    }
    else {
        formfile.style.display = "none"
    }
}

window.addEventListener('DOMContentLoaded', function() {
    if (typeof formPopUp === 'function') {
        formPopUp();
    }
});