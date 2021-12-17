class Decifra {
  private mensagemOriginal: string;
  private mensagemDecifrada: string = "";
  private mensagemSanitarizada: string = "";

  private readonly DESLOCAMENTO: number = 7;

  constructor(mensagemOriginal: string) {
    this.mensagemOriginal = mensagemOriginal;
    this.mensagemSanitarizada = this.sanitarizar(this.mensagemOriginal);
    this.mensagemDecifrada = this.decifrar();
  }

  public getMensagemOriginal(): string {
    return this.mensagemOriginal;
  }

  public getMensagemSanitarizada(): string {
    return this.mensagemSanitarizada;
  }

  public getMensagemDecifrada(): string {
    return this.mensagemDecifrada;
  }

  private letraParaCodigo(c: string): number {
    return c.charCodeAt(0) - 65;
  }

  private codigoParaLetra(n: number): string {
    return String.fromCharCode(n + 65);
  }

  private sanitarizar(msg: string): string {
    return msg
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }

  private converter = (c: string): string =>
    c.search(/[A-Z]/) != -1
      ? this.codigoParaLetra(
          (this.letraParaCodigo(c) - this.DESLOCAMENTO + 26) % 26
        )
      : c;

  private decifrar = (): string =>
    Array.from(this.mensagemSanitarizada).map(this.converter).join("");
}

/***************************** TESTE DO ALGORITMO *****************************/

const msg_decifrada: string =
  "H JLZHY V XBL L KL JLZHY. AVKVZ VZ JHTPUOVZ SLCHT H YVTH.";

const decifra = new Decifra(msg_decifrada);

console.log(decifra.getMensagemOriginal());
console.log(decifra.getMensagemSanitarizada());
console.log(decifra.getMensagemDecifrada());

/******************************************************************************/
