function verificarRestricaoPlaca(placa) {
  const hoje = new Date();
  const diaDaSemana = hoje.toLocaleDateString('pt-BR', { weekday: 'long' });

  if (diaDaSemana === 'sábado' || diaDaSemana === 'domingo') {
    return 'Pode circular livremente';
  } else {
    const ultimoDigito = placa.slice(-1);
    if ((placa.endsWith('1') || placa.endsWith('2')) && diaDaSemana === 'segunda-feira') {
      return 'Não pode circular hoje';
    } else if ((placa.endsWith('3') || placa.endsWith('4')) && diaDaSemana === 'terça-feira') {
      return 'Não pode circular hoje';
    } else if ((placa.endsWith('5') || placa.endsWith('6')) && diaDaSemana === 'quarta-feira') {
      return 'Não pode circular hoje';
    } else if ((placa.endsWith('7') || placa.endsWith('8')) && diaDaSemana === 'quinta-feira') {
      return 'Não pode circular hoje';
    } else if ((placa.endsWith('9') || placa.endsWith('0')) && diaDaSemana === 'sexta-feira') {
      return 'Não pode circular hoje';
    } else {
      return 'Pode circular hoje';
    }
  }
}

module.exports = verificarRestricaoPlaca;
