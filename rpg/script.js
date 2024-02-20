const jogador = {
    corpo: document.querySelector("#jogador"),
    velocidadeDeMovimento:20,
    olhando: "direita"
}

function funcaoJogador (evento) {
    let tecla = evento.key
    if (tecla == 'a') {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia + "px" 
        jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
        jogador.olhando = "esquerda"
    }
    if (tecla == 'd') {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.left = novaDistancia + "px" 
        jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
        jogador.olhando = "direita"
    }
    if (tecla == 'w') {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0])
        let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento
        jogador.corpo.style.top = novaDistancia + "px"
        if (jogador.olhando == 'direita'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')"
        } else if (jogador.olhando == 'esquerda'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')"
        }
    }
    if (tecla == 's') {
        let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0])
        let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento
        jogador.corpo.style.top = novaDistancia + "px" 
        if (jogador.olhando == 'direita'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')"
        } else if (jogador.olhando == 'esquerda'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')"
        }
    }
}

function disFuncaoDoJogador (evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
    }
    if (tecla == 'd') {
        jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
    }
    if (tecla == 'w') {
        if(jogador.olhando == 'direita'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')"
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
    if (tecla == 's') {
        if(jogador.olhando == 'direita'){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')"
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
}
window.addEventListener('keydown', funcaoJogador)
window.addEventListener('keyup', disFuncaoDoJogador)

let condição = 1 + 1;
let contador = 0;

while (condição == 2) {
    console.log ('melão')
    contador = contador + 1
    if (contador == 10000){
        condição = 3
    }
}