// Run with: node create-structure.js

const fs = require('fs');
const path = require('path');

const folders = [
  'src/assets',
  'src/components',
  'src/pages',
  'src/hooks',
  'src/utils',
  'src/theme',
  'scripts'
];

folders.forEach(folder => {
  const dir = path.join(__dirname, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${folder}`);
  } else {
    console.log(`Exists: ${folder}`);
  }
});