const fs = require('fs');
const path = require('path');

const dir = 'e:/dishacommercewebsite/src/components/website';
const files = ['TrustStats.tsx', 'Liveclasses.tsx', 'Blog.tsx'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace amber classes with red classes
    content = content.replace(/amber-600/g, 'red-600');
    content = content.replace(/amber-500/g, 'red-600'); // Map 500 to 600 or just use hex
    content = content.replace(/amber-400/g, 'red-500');
    content = content.replace(/amber-200/g, 'red-200');
    content = content.replace(/amber-50/g, 'red-50');
    
    // Replace hex codes
    content = content.replace(/#f59e0b/g, '#c0202a');
    content = content.replace(/#d97706/g, '#c0202a');
    content = content.replace(/rgba\(245,158,11/g, 'rgba(192,32,42');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
