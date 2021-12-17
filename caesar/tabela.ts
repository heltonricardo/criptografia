function exibirHeader(): void {
  const msg =
    "Letra | Posição | Soma Algébrica |    Soma Módulo 26    | Nova Letra";
  console.log(msg);
  console.log("-".repeat(msg.length));
}

const numFormat = (n: number): string => String(n).padStart(2);

function centralizar(msg: string, tamanho: number): string {
  const emBranco = tamanho - msg.length;
  const tras = Number.parseInt((emBranco / 2).toString());
  const frente = emBranco - tras;
  return " ".repeat(frente) + msg + " ".repeat(tras);
}

function exibirLinha(letra: string): void {
  const posicao: number = letra.charCodeAt(0) - 65;
  const somaA: string = `${numFormat(posicao)} + 3 = ${numFormat(posicao + 3)}`;
  const somaM: string = `(${numFormat(posicao)} + 3) MOD 26 = ${numFormat(
    (posicao + 3) % 26
  )}`;
  const novaLetra: string = String.fromCharCode(((posicao + 3) % 26) + 65);
  const msg: string =
    centralizar(letra, 6) +
    "|" +
    centralizar(numFormat(posicao), 9) +
    "|" +
    centralizar(somaA, 16) +
    "|" +
    centralizar(somaM, 22) +
    "|" +
    centralizar(novaLetra, 10);
  console.log(msg);
}

/***************************** TESTE DO ALGORITMO *****************************/

exibirHeader();
[...Array(26)].map((_, i) => String.fromCharCode(i + 65)).forEach(exibirLinha);

/******************************************************************************/