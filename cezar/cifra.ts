const DESLOCAMENTO: number = 7;

const converterUTF = (c: string): string =>
  c !== " " ? String.fromCharCode((c.charCodeAt(0) + DESLOCAMENTO) % 255) : c;

const cifrar = (msg: string): string =>
  Array.from(msg).map(converterUTF).join("");

const msg1: string = "A César o que é de César.";
const msg2: string = "Todos os caminhos levam a Roma.";

console.log(cifrar(msg1));
console.log(cifrar(msg2));
