class DecifraVigenere {
  private chaveOriginal: string;
  private mensagemOriginal: string;
  private mensagemCifrada: string = "";
  private chaveVigenere: Array<string> = [];
  private mensagemSanitarizada: string = "";

  constructor(chaveOriginal: string, mensagemOriginal: string) {
    this.chaveOriginal = chaveOriginal;
    this.chaveVigenere = this.montarChave();
    this.mensagemOriginal = mensagemOriginal;
    this.mensagemSanitarizada = this.sanitarizar(this.mensagemOriginal);
    this.mensagemCifrada = this.cifrar();
  }

  public getMensagemOriginal(): string {
    return this.mensagemOriginal;
  }

  public getMensagemSanitarizada(): string {
    return this.mensagemSanitarizada;
  }

  public getMensagemCifrada(): string {
    return this.mensagemCifrada;
  }

  public getChaveOriginal(): string {
    return this.chaveOriginal;
  }

  public getChaveVigenere(): string {
    return this.chaveVigenere.join("");
  }

  private letraParaCodigo(c: string): number {
    return c.charCodeAt(0) - 65;
  }

  private codigoParaLetra(n: number): string {
    return String.fromCharCode(n + 65);
  }

  private somenteLetras(texto: string): string {
    return texto.replace(/[^A-Z]/g, "");
  }

  private montarChave(): Array<string> {
    return Array.from(this.somenteLetras(this.sanitarizar(this.chaveOriginal)));
  }

  private sanitarizar(msg: string): string {
    return msg
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }

  private converter = (c: string, d: number): string =>
    this.codigoParaLetra((this.letraParaCodigo(c) - d + 26) % 26);

  private cifrar(): string {
    const tamanhoChave = this.chaveVigenere.length;
    const cifra: Array<string> = Array.from(this.mensagemSanitarizada);

    for (let i = 0, k = 0; i < cifra.length; ++i) {
      if (cifra[i].search(/[A-Z]/) != -1) {
        cifra[i] = this.converter(
          cifra[i],
          this.letraParaCodigo(this.chaveVigenere[k++ % tamanhoChave])
        );
      }
    }
    return cifra.join("");
  }
}

/***************************** TESTE DO ALGORITMO *****************************/

const chaveDecifraVigenere: string = "Esse é um teste!";

const msgCifradaVigenere: string =
  "Eesdsh.ohq obpp fgx ewoxtl kixmjrw ir trq wiwclst id gslxfsgc gsgbnxwk " +
  "qsjw xluz 30 weql ejlwv cig kiuxmzw lli mtbtexrx.";

const decifraVigenere: DecifraVigenere = new DecifraVigenere(
  chaveDecifraVigenere,
  msgCifradaVigenere
);

console.log(decifraVigenere.getChaveOriginal());
console.log(decifraVigenere.getMensagemOriginal());

console.log(decifraVigenere.getChaveVigenere());
console.log(decifraVigenere.getMensagemSanitarizada());

console.log(decifraVigenere.getMensagemCifrada());

/******************************************************************************/
