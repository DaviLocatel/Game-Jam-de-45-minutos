const btnJogadas = document.querySelectorAll('.btn-jogada');
const btnReset = document.querySelector('#btn-reset');
const pontosJogadorSpan = document.querySelector('#pontos-jogador');
const pontosComputadorSpan = document.querySelector('#pontos-computador');
const mensagemResultado = document.querySelector('#mensagem-resultado');

let pontosJogador = 0;
let pontosComputador = 0;
const opcoes = ['pedra', 'papel', 'tesoura'];

const sortearComputador = () => {
  const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
  return opcoes[indiceAleatorio];
};

const jogar = (escolhaJogador) => {
  const escolhaComputador = sortearComputador();

  if (escolhaJogador === escolhaComputador) {
    mensagemResultado.textContent = `Empate! Ambos escolheram ${escolhaJogador}.`;
    return;
  }

  if (
    (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
  ) {
    pontosJogador++;
    pontosJogadorSpan.textContent = pontosJogador;
    mensagemResultado.textContent = `Você venceu! ${escolhaJogador} vence ${escolhaComputador}.`;
  } else {
    pontosComputador++;
    pontosComputadorSpan.textContent = pontosComputador;
    mensagemResultado.textContent = `Você perdeu! ${escolhaComputador} vence ${escolhaJogador}.`;
  }
};

btnJogadas.forEach(botao => {
  botao.addEventListener('click', (evento) => {
    const escolha = evento.target.dataset.escolha;
    jogar(escolha);
  });
});

btnReset.addEventListener('click', () => {
  pontosJogador = 0;
  pontosComputador = 0;
  pontosJogadorSpan.textContent = pontosJogador;
  pontosComputadorSpan.textContent = pontosComputador;
  mensagemResultado.textContent = 'Faça sua jogada!';
});