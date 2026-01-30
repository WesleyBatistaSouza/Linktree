const washingtonIdade = document.getElementById('idade');

function calcularIdade(anoNasc, mesNasc, diaNasc) {
  const hoje = new Date();
  
  // calcular a diferença de anos
  let idade = hoje.getFullYear() - anoNasc;
  
  // calcular a diferença de meses e dias até o aniversario
  const mesAtual = hoje.getMonth(); // 0 = Janeiro, 3 = Abril
  const diaAtual = hoje.getDate();

  // Aajuste da data até o dia do aniversario
  if (mesAtual < (mesNasc - 1) || (mesAtual === (mesNasc - 1) && diaAtual < diaNasc)) {
    idade--;
  }

  return idade;
}

// 16 de Abril de 1997
const idadeWashington = calcularIdade(1997, 4, 16);
washingtonIdade.textContent = idadeWashington
console.log(`Idade de Washington: ${idadeWashington} anos`);