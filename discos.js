let tabuleiro = [
  "preto",
  "preto",
  "preto",
  "transparente",
  "branco",
  "branco",
  "branco",
];

let selecionado = null;

export function selecionaPosicao(posicao) {
  if (selecionado === null) selecionado = posicao;
  else if (selecionado == posicao) selecionado = null;
  else {
    mover(selecionado, posicao);
    selecionado = null;
  }
}

export function getTabuleiro() {
  return [...tabuleiro];
}

function mover(origem, destino) {
  if (tabuleiro[destino] !== "transparente") return;
  const deslocamento = destino - origem;
  if (deslocamento > 2 || deslocamento < -2) return;
  tabuleiro[destino] = tabuleiro[origem];
  tabuleiro[origem] = "transparente";
}
