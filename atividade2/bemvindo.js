const readline = require('readline');//biblioteca entrada de texto

// Interface para leitura de linha
const rl = readline.createInterface({
    input: process.stdin,//entrada do texto usuario 
    output: process.stdout//saida do texto do usuario
});

// Função principal
function main() {
    rl.question('Digite seu nome: ', (name) => {//parametro name
        console.log(`Olá, ${name}! Bem-vindo ao programa em Node.js.`);
        rl.close(); // Fecha a interface de leitura de linha após a interação com o usuário
    });
}

// Inicia o programa
main();
