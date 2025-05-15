        // Configuration de Monaco Editor
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

        let editor;
        let originalContent = '';
        let recentFiles = [];
        let currentLang = 'plaintext';

        // Récupération des éléments du DOM
        const fileInput = document.getElementById('fileInput');
        const fileNameInput = document.getElementById('fileNameInput');
        const saveBtn = document.getElementById('saveBtn');
        const resetBtn = document.getElementById('resetBtn');
        const historyContainer = document.getElementById('history');

        // Initialisation de l'éditeur Monaco
        require(['vs/editor/editor.main'], function () {
            editor = monaco.editor.create(document.getElementById('editor-container'), {
                value: '',
                language: 'plaintext',
                theme: 'vs-dark',
                automaticLayout: true
            });

            // Définir la langue si un nom de fichier est déjà présent
            const fileName = fileNameInput.value.trim();
            if (fileName) {
                setLanguageFromExtension(fileName);
            }
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
                    setLanguageFromExtension(file.name);
                    originalContent = file.content;
                });
                historyContainer.appendChild(div);
            });
        }

        // Détecte la langue à partir de l'extension du fichier et l'applique à l'éditeur
        function setLanguageFromExtension(filename) {
            const langMap = {
                txt: 'plaintext', abap: 'abap', apex: 'apex', azcli: 'azcli', bat: 'bat', bicep: 'bicep',
                mligo: 'cameligo', clo: 'clojure', clj: 'clojure', coffee: 'coffeescript', c: 'c', cpp: 'cpp',
                cs: 'csharp', csp: 'csp', css: 'css', cypher: 'cypher', dart: 'dart', dockerfile: 'dockerfile',
                ecl: 'ecl', ex: 'elixir', exs: 'elixir', f9: 'flow9', fs: 'fsharp', ftl: 'freemarker2',
                go: 'go', gql: 'graphql', graphql: 'graphql', hbs: 'handlebars', hcl: 'hcl', html: 'html',
                ini: 'ini', java: 'java', js: 'javascript', julia: 'julia', kt: 'kotlin', less: 'less',
                lex: 'lexon', lua: 'lua', liquid: 'liquid', m3: 'm3', md: 'markdown', mdx: 'mdx',
                s: 'mips', dax: 'msdax', sql: 'sql', msql: 'mysql', objc: 'objective-c', m: 'objective-c',
                pas: 'pascal', p4: 'pla', p: 'pascal', pl: 'perl', pgsql: 'pgsql', php: 'php',
                ats: 'postiats', pq: 'powerquery', ps1: 'powershell', proto: 'proto', pug: 'pug',
                py: 'python', qs: 'qsharp', r: 'r', cshtml: 'razor', redis: 'redis', redshift: 'redshift',
                rst: 'restructuredtext', rb: 'ruby', rs: 'rust', sb: 'sb', scala: 'scala', scm: 'scheme',
                scss: 'scss', sh: 'shell', sol: 'sol', aes: 'aes', sparql: 'sparql', st: 'st',
                swift: 'swift', sv: 'systemverilog', v: 'verilog', tcl: 'tcl', twig: 'twig',
                ts: 'typescript', tsp: 'typespec', vb: 'vb', wgsl: 'wgsl', xml: 'xml', yaml: 'yaml',
                yml: 'yaml', json: 'json'
            };
            const ext = filename.split('.').pop().toLowerCase();
            const lang = langMap[ext] || 'plaintext';
            if (editor && editor.getModel()) {
                monaco.editor.setModelLanguage(editor.getModel(), lang);
            }
        }

        // Événement : changement du nom de fichier => mise à jour de la langue
        fileNameInput.addEventListener('input', function() {
            if (this.value.trim() && editor) {
                setLanguageFromExtension(this.value.trim());
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
                setLanguageFromExtension(file.name);
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

        // Ouvre/ferme la sidebar
        function toggleSidebar() {
            const sidebar = document.getElementById("sidebar");
            const content = document.getElementById("mainContent");
            sidebar.classList.toggle("open");
            content.classList.toggle("shift");
        }
