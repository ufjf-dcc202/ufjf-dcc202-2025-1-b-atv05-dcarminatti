import { getTabuleiro } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Olá, DCC202!";

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);

const tabuleiro = getTabuleiro();
for (let i = 0; i < 7; i++) {
  const eDisco = criaDiscoTabuleiro(tabuleiro[i]);
  eTabuleiro.appendChild(eDisco);
}

function criaTabuleiro() {
  const novoTabuleiro = document.createElement("div");
  novoTabuleiro.classList.add("tabuleiro");
  return novoTabuleiro;
}

function criaDiscoTabuleiro(cor) {
  const novoDisco = document.createElement("div");
  novoDisco.classList.add("discoTabuleiro");
  novoDisco.dataset.cor = cor;
  return novoDisco;
}
