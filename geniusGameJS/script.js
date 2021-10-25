let order = []; //empity array to receive the orders to interact with the user
let clickedOrder = []; //user clicked orders
let score = 0; //user score

//0 - green
//1 - red
//2 - yellow
//3 - blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//function to shuffle colors
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder; //apply the index to the color ordered by the user
    clickedOrder = [];

//loop to random the array to execute the color order
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Show the next color
let lightColor = (element, number) => {
    number = number * 400;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
       element.classList.remove('selected') 
    });
}

//to check the buttoms pushed in the same sequence created by the script
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo nível.`);
        nextLevel();
    }   
}

//function for the user click
let userClick = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
       createColorElement(color).classList.remove('selected');
       checkOrder();
    }, 250);
}

//function that return the color
let createColorElement = (color) => {
    if(color == 0) return green;
     else if(color == 1) return red;
        else if(color == 2) return yellow;
            else if(color == 3) return blue;
}

//function to define the next level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//function to game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\n Você perdeu. Clique em Ok para iniciar novamente`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Start the game
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo.');
    score = 0;

    nextLevel();
}

//click events for the colors
green.onclick = () => userClick(0);
red.onclick = () => userClick(1);
yellow.onclick = () => userClick(2);
blue.onclick = () => userClick(3);

//start the game (page load)
playGame();