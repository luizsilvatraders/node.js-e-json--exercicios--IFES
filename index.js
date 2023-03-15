const prompt = require('prompt-sync')();
const verificarRestricaoPlaca = require('./dados');
const escreverDataPorExtenso = require('./dataPorExtenso');
const dividir = require('./divisao');

const placa = prompt('Digite a placa do veículo (sem traço ou espaço): ');
const resultadoP = verificarRestricaoPlaca(placa);
console.log(`Veículo com placa ${placa} ${resultadoP}`);


const dataStr = prompt('Digite a data no formato DD/MM/AAAA: ');
const dataPorExtenso = escreverDataPorExtenso(dataStr);
console.log(`Data por extenso: ${dataPorExtenso}`);

const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));
const resultado = dividir(num1, num2);
console.log(`Resultado: ${resultado}`);

const fs = require('fs');
fs.readFile('dados-pessoas.json', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const pessoas = JSON.parse(data);
  console.log(pessoas);
});