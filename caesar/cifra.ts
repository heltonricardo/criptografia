class Cifra {
  private mensagemOriginal: string;
  private mensagemCifrada: string = "";
  private mensagemSanitarizada: string = "";

  private readonly DESLOCAMENTO: number = 7;

  constructor(mensagemOriginal: string) {
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
      ? this.codigoParaLetra((this.letraParaCodigo(c) + this.DESLOCAMENTO) % 26)
      : c;

  private cifrar = (): string =>
    Array.from(this.mensagemSanitarizada).map(this.converter).join("");
}

const msg: string = "A César o que é de César. Todos os caminhos levam à Roma.";
const cifra = new Cifra(msg);
console.log(cifra.getMensagemOriginal());
console.log(cifra.getMensagemSanitarizada());
console.log(cifra.getMensagemCifrada());
