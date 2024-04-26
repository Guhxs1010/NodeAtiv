const fs = require('fs');//biblioteca de arquivos

// Nome do arquivo que queremos ler
const fileName = 'texto.txt';

// Leitura do arquivo
fs.readFile(fileName, 'utf-8', (err, data) => {
    
    //file name nome do arquivo, 
    //utf-8 condição do arquivo,
    //err e data função de retorno

    if (err) {//codigo de erro
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    //codigo retorno
    console.log('Conteúdo do arquivo:');
    console.log(data);
});
