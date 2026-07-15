class Temperatura {
  constructor(celsius) { this._celsius = celsius; }
  get celsius() { return this._celsius; }
  set celsius(v) { this._celsius = v; }
  get fahrenheit() { return (this._celsius * 9) / 5 + 32; }
}