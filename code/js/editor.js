document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    if (editor) {;
        const fileNameInput = document.querySelector('input[name="fileName"]');
        if (fileNameInput) {
            const fileName = fileNameInput.value;
            const extension = fileName.split('.').pop().toLowerCase();
            const languageMap = {
                'js': 'javascript',
                'html': 'html',
                'css': 'css',
                'json': 'json',
                'txt': 'plaintext'
            };
            editor.className = `language-${languageMap[extension] || 'plaintext'}`;
        }
    }
});