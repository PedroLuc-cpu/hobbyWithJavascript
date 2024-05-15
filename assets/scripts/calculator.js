

const botao_calculadora_numeros = document.querySelectorAll(".botao_calculadora_numeros")
const arrayNumeros = new Array()

for (let i = 0; i < botao_calculadora_numeros.length; i++) {
  arrayNumeros.push(botao_calculadora_numeros[i].innerText)
}

console.log(arrayNumeros)