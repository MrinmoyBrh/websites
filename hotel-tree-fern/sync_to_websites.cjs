const fs = require('fs');
const path = require('path');

const src = 'd:/Antigravity/Hotel Tree Fern';
const dest = 'd:/Antigravity/websites/hotel-tree-fern';

function copyRecursiveSync(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'temp' || entry.name === 'dist') {
      continue;
    }

    if (entry.isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursiveSync(src, dest);
console.log('Successfully copied project to d:/Antigravity/websites/hotel-tree-fern');
