class Decifra {
  private frequencia: Map<string, number> = new Map();

  constructor() {
    Array.from(new Array(26).keys()).forEach((p) => {
      this.frequencia.set(this.codigoParaLetra(p), 0);
    });
  }

  /***************************** MÉTODOS PRIVADOS *****************************/

  private sanitarizar(msg: string): string {
    return msg
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/[^A-Z]/g, "");
  }

  private codigoParaLetra(n: number): string {
    return String.fromCharCode(n + 65);
  }

  private getFrequenciaPorLetra(c: string): number {
    return this.frequencia.get(c) ?? 0;
  }

  private incrementarFrequencia(letra: string) {
    this.frequencia.set(letra, this.getFrequenciaPorLetra(letra) + 1);
  }

  /***************************** MÉTODOS PÚBLICOS *****************************/

  public treinar(texto: string): void {
    Array.from(this.sanitarizar(texto)).forEach(
      this.incrementarFrequencia,
      this
    );
  }

  public converter(c: string): string {
    return c !== " " ? String.fromCharCode((c.charCodeAt(0) + 1) % 255) : c;
  }

  public decifrar = (msg: string): string =>
    Array.from(msg).map(this.converter).join("");
}

const EXEMPLO: string = `O Brasil é considerado um país grande. Dessa forma,
possui uma extensa variedade cultural, algo que pode ser percebido através
das músicas que são lançadas todos os anos. Os ritmos musicais são muito
variados, assim como os cantores e compositores, fazendo sucesso dentro e
fora do país. Há alguns cantores que, mesmo tendo interpretado músicas no
passado, ainda são lembrados pelo público. Um desses cantores é o Caetano
Veloso, que possui uma grande obra musical.`;

const MENSAGEM: string =
  "UVCBGRFR URHEVFGVPN R NDHRYN DHR PBZB ZRGBQB QR GENONYUB R NQBGNQN N " +
  "GVGHYB CEBIVFBEVB PBZB VQRVN QVERGEVM AN CRFDHVFN QBF SNGBF FRZ N " +
  "CERBPHCNPNB VAVPVNY QR FHN IREQNQR BH SNYFVQNQR";

const decifra = new Decifra();
decifra.treinar(EXEMPLO);
