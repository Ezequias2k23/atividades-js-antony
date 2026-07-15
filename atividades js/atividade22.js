class Fila {
  constructor() { this.items = []; }
  enfileirar(item) { this.items.push(item); }
  desenfileirar() { return this.items.shift(); }
  frente() { return this.items[0]; }
  tamanho() { return this.items.length; }
}