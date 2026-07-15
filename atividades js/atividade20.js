function contarPalavras(frase) {
  const map = new Map();
  frase.split(" ").forEach(p => map.set(p, (map.get(p) || 0) + 1));
  return map;
}