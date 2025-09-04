const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');

// Функция для рекурсивного поиска и замены в файлах
function fixPathsInFile(filePath) {
  if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Заменяем абсолютные пути на относительные
    content = content.replace(/\/static\//g, 'static/');
    content = content.replace(/href="\//g, 'href="');
    content = content.replace(/src="\//g, 'src="');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed paths in:', filePath);
  }
}

// Рекурсивно обходим все файлы в build
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      fixPathsInFile(fullPath);
    }
  });
}

// Запускаем обработку
processDirectory(buildDir);