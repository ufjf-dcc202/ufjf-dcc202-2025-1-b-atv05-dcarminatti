const tabuleiro = [
  "preto",
  "preto",
  "preto",
  "transparente",
  "branco",
  "branco",
  "branco",
];

export function getTabuleiro() {
  return [...tabuleiro];
}

function mover(origem, destino) {
  if (tabuleiro[destino] !== "transparente") return;
  if (Math.abs(destino - origem) > 2) return;

  if (Math.abs(destino - origem) === 2) {
    const meio = (origem + destino) / 2;
    if (tabuleiro[meio] === "transparente") return;
    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = "transparente";
  }
}
