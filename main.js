import { getTabuleiro, selecionaPosicao } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Olá, DCC202!";

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);

const tabuleiro = getTabuleiro();
for (let i = 0; i < 7; i++) {
  const eDisco = criaDiscoTabuleiro(tabuleiro[i], i);
  eTabuleiro.appendChild(eDisco);
}

function atualizaDiscos() {
  const tabuleiro = getTabuleiro();
  for (let i = 0; i < eTabuleiro.children.length; i++) {
    const disco = eTabuleiro.children[i];
    disco.dataset.cor = tabuleiro[disco.dataset.posicao];
  }
}

function criaTabuleiro() {
  const novoTabuleiro = document.createElement("div");
  novoTabuleiro.classList.add("tabuleiro");
  return novoTabuleiro;
}

function discoTabuleiroClick(event) {
  const posicao = Number(event.target.dataset.posicao);
  selecionaPosicao(posicao);
  atualizaDiscos();
}

function criaDiscoTabuleiro(cor, posicao) {
  const novoDisco = document.createElement("div");
  novoDisco.classList.add("discoTabuleiro");
  novoDisco.dataset.cor = cor;
  novoDisco.dataset.posicao = posicao;
  novoDisco.addEventListener("click", discoTabuleiroClick);
  return novoDisco;
}
