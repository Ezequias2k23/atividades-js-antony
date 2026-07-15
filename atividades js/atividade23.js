class No { constructor(valor) { this.valor = valor; this.proximo = null; } }
class ListaLigada {
  constructor() { this.head = null; }
  adicionar(valor) {
    let novo = new No(valor);
    if (!this.head) this.head = novo;
    else {
      let aux = this.head;
      while (aux.proximo) aux = aux.proximo;
      aux.proximo = novo;
    }
  }
  paraArray() {
    let res = [], aux = this.head;
    while (aux) { res.push(aux.valor); aux = aux.proximo; }
    return res;
  }
}