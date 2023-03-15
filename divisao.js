function dividir(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error('Divisão por zero');
    }
    return num1 / num2;
  } catch (error) {
    return error.message;
  }
}

module.exports = dividir;
