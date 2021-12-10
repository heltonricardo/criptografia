class Decifra {
  private frequencia: object = Array(26).map((_, i) => this.codigoParaLetra(i): 0);

  public converter(c: string): string {
    return c !== " " ? String.fromCharCode((c.charCodeAt(0) + 1) % 255) : c;
  }

  public decifrar = (msg: string): string =>
    Array.from(msg).map(this.converter).join("");

  private sanitarizar(msg: string): string {
    return msg
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/[^A-Z]/g, "");
  }

  private letraParaCodigo(c: string): number {
    return c.charCodeAt(0) - 65;
  }

  private codigoParaLetra(n: number): string {
    return String.fromCharCode(n + 65);
  }

  public resetFrequencia(): void {
    this.frequencia = { ...this.frequencia.map((_) => 0) };
  }

  public treinar(texto: string): void {
    Array.from(this.sanitarizar(texto))
      .map(this.letraParaCodigo)
      .forEach((n) => ++this.frequencia[n]);
  }
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

