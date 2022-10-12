let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let container = document.querySelector("#container");
let x1 = document.getElementById('2-players')
let bot = document.getElementById('c-maquina')
var mensagem = document.getElementById('mensagemid');
var mensagemText = document.getElementById('mensagemText');
let secoundPlay;

// contador de jogadas
let player1 = 0;
let player2 = 0;


// adicinando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    // quando alguem clicar na caixa 
    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        // verificar se ja tem x ou o
        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            //computar jogada
            if(player1 == player2) {
                player1++;      

            if(secoundPlay == 'c-maquina') {
                    
                //fuçao executar a jogada
                computerPlay();

                player2++;
            
            } 
        
            } else {
                player2++;
            }

            //checar quem venceu 
            checkWinCondition()
        }
            
    })
}

// eventos para saber se é 2 player ou IA
function PlayerOuIa() {
   
        x1.style.display = 'none';
        bot.style.display = 'none';

}

//inicializaçao do game
function voltar() {
setTimeout(function() {
    container.classList.remove("hide");
}, 500);
}

//evento click
if (x1.addEventListener("click", function() {
   
    PlayerOuIa()
    voltar()

})){} else if (bot.addEventListener("click", function() {

    PlayerOuIa()
    voltar()
    secoundPlay = this.getAttribute("id")

    })) {}


// ver quem vai jogar
function checkEl(player1, player2) {

    if(player1 == player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }

    return el;
}

// ver quem ganhou
function checkWinCondition() {

    let b1 = document.getElementById("bloco-1");
    let b2 = document.getElementById("bloco-2");
    let b3 = document.getElementById("bloco-3");
    let b4 = document.getElementById("bloco-4");
    let b5 = document.getElementById("bloco-5");
    let b6 = document.getElementById("bloco-6");
    let b7 = document.getElementById("bloco-7");
    let b8 = document.getElementById("bloco-8");
    let b9 = document.getElementById("bloco-9");

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;  
    
    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
        //x
        declareWinner('x');
    } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
        //o
        declareWinner('o');
    }
}

if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;  
    
    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
        //x
        declareWinner('x');
    } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
        //o
        declareWinner('o');
    }
}

if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;  
    
    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
        //x
        declareWinner('x');
    } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
        //o
        declareWinner('o');
    }
}

if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;  
    
    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
        //x
        declareWinner('x');
    } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
        //o
        declareWinner('o');
    }
}

if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;  
    
    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
        //x
        declareWinner('x');
    } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
        //o
        declareWinner('o');
    }
}

if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;  
    
    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
        //x
        declareWinner('x');
    } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
        //o
        declareWinner('o');
    }
}

if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;  
    
    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
        //x
        declareWinner('x');
    } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
        //o
        declareWinner('o');
    }
}

if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;  
    
    if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
        //x
        declareWinner('x');
    } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
        //o
        declareWinner('o');
    }
}

// deu velha
let counter = 0;

for(let i = 0; i < boxes.length; i++) {
    if(boxes[i].childNodes[0] != undefined) {
        counter++;
    }
}

if(counter == 9) {
    declareWinner();
}

}

// limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {

    let playerX = document.querySelector("#placar-1");
    let playerO = document.querySelector("#placar-2");
    let msg = '';

    if(winner == 'x') {
        playerX.textContent = parseInt(playerX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if(winner == 'o') {
        playerO.textContent = parseInt(playerO.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha!";
    }

    // exibe msg
    mensagemText.innerHTML = msg;
    mensagem.classList.remove("hide");

    // esconder msg
    setTimeout(function() {
        mensagem.classList.add("hide");
    }, 2000);

    // zerar as jogadas
    player1 = 0;
    player2 = 0;

    // removee x e o
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// executar a logica da maquina
function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

    // só preenche se tiver vazio o filho
    if(boxes[i].childNodes[0] == undefined) {
        if(randomNumber <= 1) {
            setTimeout(function() { boxes[i].appendChild(cloneO)}, 600);
            counter++;
            break;
        }

    // checagem de quantas estao preenchidas
    } else {
        filled++;
    }

}

if(counter == 0 && filled < 9) {
    computerPlay();
}
 
}