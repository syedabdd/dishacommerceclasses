const fs = require('fs');

const file = 'e:/dishacommercewebsite/src/components/website/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/#f59e0b/g, '#c0202a');
content = content.replace(/#1e293b/g, '#1a2e6c');
content = content.replace(/text-amber-400/g, 'text-red-400');
content = content.replace(/text-amber-300/g, 'text-red-300');
content = content.replace(/linear-gradient\(135deg, #334155, #c0202a\)/g, 'linear-gradient(135deg, #1a2e6c, #c0202a)');

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
