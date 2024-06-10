const fs = require('fs');
const path = require('path');

const directories = [
  'docs/intro-to-oss',
  'docs/becoming-a-maintainer'
];

directories.forEach(dir => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      if (path.extname(file) === '.md') {
        const filePath = path.join(dir, file);
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) throw err;
          const fileName = path.basename(file, '.md');
          const title = fileName.replace(/-/g, ' ');
          const frontMatter = `---
id: ${fileName}
title: "${title}"
sidebar_label: "${title}"
keywords: ["${title}", "Open Source", "Open Source Community"]
---

`;
          const newData = frontMatter + data;
          fs.writeFile(filePath, newData, 'utf8', err => {
            if (err) throw err;
            console.log(`Added front matter to ${filePath}`);
          });
        });
      }
    });
  });
});