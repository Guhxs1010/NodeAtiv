const readline = require('readline');//biblioteca de leitura

// Interface para leitura de linha
const rl = readline.createInterface({
    input: process.stdin,//entrado usuario
    output: process.stdout//saida usuario
});

// Função para gerar um número aleatório entre 1 e 70
function generateRandomNumber() {
    return Math.floor(Math.random() * 70) + 1;
}

// Número aleatório gerado
const randomNumber = generateRandomNumber();

// Função principal
function main() {
    rl.question('Tente adivinhar o número entre 1 e 70: ', (guess) => {//guess parametro
        const userGuess = parseInt(guess);
        
        // Verifica se o palpite do usuário está correto
        if (userGuess === randomNumber) {
            console.log('Parabéns! Você acertou o número!');
            rl.close();
        } else if (userGuess < randomNumber) {
            console.log('Tente um número maior.');
            main(); // Chama a função principal recursivamente para permitir que o usuário faça mais palpites
        } else {
            console.log('Tente um número menor.');
            main(); // Chama a função principal recursivamente para permitir que o usuário faça mais palpites
        }
    });
}

// Inicia o programa
main();
