function criarContador() {
  let count = 0;
  return () => ++count;
}