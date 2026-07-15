const ehPalindromo = (str) => {
  const limpa = str.toLowerCase();
  return limpa === inverter(limpa);
};