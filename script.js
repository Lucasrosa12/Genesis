let order = [];
let clickedOrder = [];
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amerelo
// 3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// #Função para o jogo crie uma ordem de numeros, sorteira numero de 0 á 3:
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);                   //guarda o numero a cada jogada
    order[order.length] = colorOrder;         //numero do array que vai "popular" a função de sorteio
    clickedOrder = [];

    for(let i in order) {          //Aceder a cor que o numero for sorteado
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); //pega o numero + 1 para existir na lista de cores
}
}
//Acende a Proxima Cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => { //setTimeout-função Nativa: espera o tempo passar para executar o codigp da função
        element.classList.add('selected');
    }, number - 250);    

    setTimeout(() => { //setTimeout-função Nativa: espera o tempo passar para retirar o codigp da função
        element.classList.remove('selected');
    });
}
//checar para ver se a ordem clicada for a certa.
let checkOrder = () => {
    for(let i in clickedOrder) {//para cada i dentro do clickedOrder
            if(clickedOrder[i] != order[i]) {
                gameOver();
                break;
            }
    }
    if(clickedOrder.length == order.length) { //comparando os valores
        alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo Nível!`);
        nextLevel();
    }
}
//Função para o clique o usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder(); 
    },250);
           
}
//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//Função para proximo nivel de Jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}
//Função para Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\n Você Perdeu! \n Clique em OK para iniciar um novo Jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}
//Função de Inicio de Jogo
let playGame = () => {
    alert('Bem Vindo ao Gênisis! iniciando novo jogo!')
    score = 0;

    nextLevel();
}
//eventos de Cliques para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
/* green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3)); */

//Inicio do Jogo
playGame();