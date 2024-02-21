const fs = require('fs');
const path = require('path');

function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${year}${month}${day}-${hours}${minutes}${seconds}`;
  }

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

let filesArray = getAllFiles('./dist');

filesArray = filesArray.concat([
  'index.html',
  'manifest.json',
  'service-worker.js',
])

// -----------------
let template = fs.readFileSync(path.join(__dirname, 'template.txt'), 'utf8').toString()

template = template.replace(`{{timestamp}}`, `precache-v` + getCurrentTime())
template = template.replace(`{{urls}}`, JSON.stringify(filesArray, null, 2))

// console.log(template)

fs.writeFileSync(path.join(__dirname, '../../service-worker.js'), template, 'utf8')
