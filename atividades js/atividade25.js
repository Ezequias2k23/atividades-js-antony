class ContaBancaria {
  constructor(saldo) { this.saldo = saldo; }
  depositar(v) { this.saldo += v; }
  sacar(v) { if (v <= this.saldo) this.saldo -= v; }
  consultarSaldo() { return this.saldo; }
}