document.addEventListener('DOMContentLoaded', function() {
    const editorElement = document.getElementById('monaco-editor');
    const content = editorElement.textContent || '';
    
    editorElement.textContent = '';
    
    require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        monaco.editor.defineTheme('zencode-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#2d2c2c',
                'editor.lineHighlightBackground': '#3a3838',
                'editorLineNumber.foreground': '#888886',
                'editorGutter.background': '#2d2c2c',
                'editorCursor.foreground': '#d1d1d0',
            }
        });
        
        const editor = monaco.editor.create(editorElement, {
            value: content,
            language: detectLanguage(document.querySelector('input[name="fileName"]').value),
            theme: 'zencode-theme',
            automaticLayout: true,
            minimap: { enabled: true },
            scrollBeyondLastLine: false,
            roundedSelection: false,
            padding: {
                top: 10,
                bottom: 10
            }
        });
        
        document.querySelector('form').addEventListener('submit', function() {
            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = 'content';
            hiddenInput.value = editor.getValue();
            this.appendChild(hiddenInput);
        });
    });
    
    function detectLanguage(fileName) {
        const extension = fileName.split('.').pop().toLowerCase();
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
        
        return langMap[extension] || 'plaintext';
    }
});
