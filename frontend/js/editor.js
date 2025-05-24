document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    if (editor) {;
        const fileNameInput = document.querySelector('input[name="fileName"]');
        if (fileNameInput) {
            const fileName = fileNameInput.value;
            const extension = fileName.split('.').pop().toLowerCase();
            editor.className = `language-${langMap[extension] || 'plaintext'}`;
        }
    }
});

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


// function setLanguageFromExtension(filename) {


//     const labelMap = {
//         plaintext: 'Texte brut', abap: 'ABAP', apex: 'Apex', azcli: 'Azure CLI', bat: 'Batch',
//         bicep: 'Bicep', cameligo: 'Cameligo', clojure: 'Clojure', coffeescript: 'CoffeeScript', c: 'C',
//         cpp: 'C++', csharp: 'C#', csp: 'CSP', css: 'CSS', cypher: 'Cypher', dart: 'Dart',
//         dockerfile: 'Dockerfile', ecl: 'ECL', elixir: 'Elixir', flow9: 'Flow9', fsharp: 'F#',
//         freemarker2: 'FreeMarker', go: 'Go', graphql: 'GraphQL', handlebars: 'Handlebars', hcl: 'HCL',
//         html: 'HTML', ini: 'INI', java: 'Java', javascript: 'JavaScript', julia: 'Julia',
//         kotlin: 'Kotlin', less: 'LESS', lexon: 'Lexon', lua: 'Lua', liquid: 'Liquid',
//         m3: 'M3', markdown: 'Markdown', mdx: 'MDX', mips: 'MIPS', msdax: 'MSDAX',
//         mysql: 'MySQL', 'objective-c': 'Objective-C', pascal: 'Pascal', pascaligo: 'Pascaligo',
//         perl: 'Perl', pgsql: 'PostgreSQL', php: 'PHP', pla: 'PLA', postiats: 'ATS',
//         powerquery: 'Power Query', powershell: 'PowerShell', proto: 'Protobuf', pug: 'Pug',
//         python: 'Python', qsharp: 'Q#', r: 'R', razor: 'Razor', redis: 'Redis',
//         redshift: 'Redshift', restructuredtext: 'RestructuredText', ruby: 'Ruby', rust: 'Rust',
//         sb: 'SmallBasic', scala: 'Scala', scheme: 'Scheme', scss: 'SCSS', shell: 'Shell',
//         sol: 'Solidity', aes: 'AES', sparql: 'SPARQL', sql: 'SQL', st: 'ST', swift: 'Swift',
//         systemverilog: 'SystemVerilog', verilog: 'Verilog', tcl: 'TCL', twig: 'Twig',
//         typescript: 'TypeScript', typespec: 'TypeSpec', vb: 'VB', wgsl: 'WGSL', xml: 'XML',
//         yaml: 'YAML', json: 'JSON'
//     };
// }

export{langMap}