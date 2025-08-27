
function investigarSuspeito(notasSuspeito) {

  const alvo = 150;
  let ponteiroEsquerda = 0;
  let ponteiroDireita = notasSuspeito.length - 1;

  while (ponteiroEsquerda < ponteiroDireita) {
    const somaAtual = notasSuspeito[ponteiroEsquerda] + notasSuspeito[ponteiroDireita];

    if (somaAtual === alvo) {
      return true;
    }

    if (somaAtual < alvo) {
      ponteiroEsquerda++;
    } else {
      ponteiroDireita--;
    }
  }

  return false;
}

// --- Exemplos de Uso ---
const suspeito1 = [10, 20, 50, 100, 130]; // 20 + 130 = 150 -> true
const suspeito2 = [20, 30, 40, 50, 60];  // Nenhuma combinação soma 150 -> false
const suspeito3 = [50, 100];             // 50 + 100 = 150 -> true
const suspeito4 = [10, 20, 30];          // Nenhuma combinação soma 150 -> false

console.log(`Verificando Suspeito 1: ${investigarSuspeito(suspeito1)}`); // Esperado: true
console.log(`Verificando Suspeito 2: ${investigarSuspeito(suspeito2)}`); // Esperado: false
console.log(`Verificando Suspeito 3: ${investigarSuspeito(suspeito3)}`); // Esperado: true
console.log(`Verificando Suspeito 4: ${investigarSuspeito(suspeito4)}`); // Esperado: false
