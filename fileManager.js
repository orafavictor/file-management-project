import fs from 'fs'; 

function createDirectory(dirPath) {
    // Retorna uma Promise que resolve quando o diretório é criado com sucesso ou rejeita em caso de erro
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, { recursive: true}, (err) => {
            if(err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve(`Directory '${dirPath}' created sucessfully.`); // Resolve a Promise com uma mensagem de sucesso
            }
        })
    })
}

function createFile(filePath, content = '') {
    // Retorna uma Promise que resolve quando o arquivo é criado com sucesso ou rejeita em caso de erro
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve(`File '${filePath}' created successfully.`); // Resolve a Promise com uma mensagem de sucesso
            }
        })
    })
}

function listFiles(dirPath) {
    // Retorna uma Promise que resolve com a lista de arquivos
    return new Promise ((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if(err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve(files); // Resolve a Promise com a lista de arquivos
            }
        });
    });
}

function readFiles(filePath) {
    // Retorna uma Promise que resolve com o conteúdo do arquivos
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve(data); // Resolve a Promise com o conteúdo do arquivo
            }
        });
    });
}

function writeFile(filePath, content) {
    // Retorna uma Promise que resolve quando o arquivo é escrito
    return new Promise ((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve('File written sucessfully'); // Resolve a Promise indicando sucesso
            }
        });
    });
}

function deleteFile(pathFile) {
    return new Promise((resolve, reject) => {
        fs.unlink(pathFile, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve('File deleted sucessfully.');
            }
        })
    })
}

export default {
    createDirectory,
    createFile,
    listFiles,
    readFiles,
    writeFile,
    deleteFile
};