export function setLanguageFromExtension(filename, editor) {
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