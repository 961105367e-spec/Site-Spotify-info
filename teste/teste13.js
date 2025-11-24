function calcular() {
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  let op = document.getElementById('op').value;
  let resultado = document.getElementById('resultado');
  let res;

 

  switch (op) {
    case '+':
      res = num1 + num2;
      break;
  case '-':
    res = num1 - num2;
    break;
  case '*':
    res = num1 * num2;
    break;
  case '/':
  if (num2 == 0) {
      resultado.textContent = "nao e possível dividir por zero!";
      return;
    }
    res = num1 / num2;
    break;
  default:
      resultado.textContent = "Operacao inválida";
      return;
}

resultado.textContent = `${num1} ${op} ${num2} = ${res}`;

}

function limpar() {
document.getElementById('num1').value = '';
document.getElementById('num2').value = '';
document.getElementById('resultado').textContent = '';
}