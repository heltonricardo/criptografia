const DESLOCAMENTO: number = 7;
const MSG1: string = "A César o que é de César.";
const MSG2: string = "Todos os caminhos levam a Roma.";

const converter = (c: string): string =>
  c !== " " ? String.fromCharCode((c.charCodeAt(0) + DESLOCAMENTO) % 255) : c;

const cifrar = (msg: string): string => Array.from(msg).map(converter).join("");

console.log(cifrar(MSG1));
console.log(cifrar(MSG2));
