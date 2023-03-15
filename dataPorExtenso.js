const meses = [
  'janeiro', 'fevereiro', 'março', 'abril',
  'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'
];

function escreverDataPorExtenso(dataStr) {
  const [dia, mes, ano] = dataStr.split('/');

  const mesPorExtenso = meses[parseInt(mes) - 1];
  const dataPorExtenso = `${dia} de ${mesPorExtenso} de ${ano}`;

  return dataPorExtenso;
}

module.exports = escreverDataPorExtenso;