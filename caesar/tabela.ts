function exibirHeader(): void {
  const msg =
    "Letra | Posição | Soma Algébrica |    Soma Módulo 26    | Nova Letra";
  console.log(msg);
  console.log("-".repeat(msg.length));
}

function centralizar(msg: string, tamanho: number): string {
  const emBranco = tamanho - msg.length;
  const frente = Number.parseInt((emBranco / 2).toString());
  const tras = emBranco - frente;
  return " ".repeat(frente) + msg + " ".repeat(tras);
}

function exibirLinha(letra: string): void {
  const posicao: number = letra.charCodeAt(0) - 65;
  const somaAlgebrica: string = `${posicao} + 3 = ${posicao + 3}`;
  const somaModulo: string = `(${posicao} + 3) MOD 26 = ${(posicao + 3) % 26}`;
  const novaLetra: string = String.fromCharCode(((posicao + 3) % 26) + 65);
  const msg: string =
    centralizar(letra, 6) +
    "|" +
    centralizar(posicao.toString(), 9) +
    "|" +
    centralizar(somaAlgebrica, 16) +
    "|" +
    centralizar(somaModulo, 23) +
    "|" +
    centralizar(novaLetra, 10);
  console.log(msg);
}

exibirHeader();
[...Array(26)].map((_, i) => String.fromCharCode(i + 65)).forEach(exibirLinha);
