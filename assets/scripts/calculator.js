// const botao_calculadora_numeros = document.querySelectorAll(".botao_calculadora_numeros")
// const arrayNumeros = new Array()

// for (let i = 0; i < botao_calculadora_numeros.length; i++) {
//   arrayNumeros.push(botao_calculadora_numeros[i].innerText)
// }

// console.log(arrayNumeros)

// console.log("Mop Top".match(/[tm]op/gi));

const calculator_main = document.getElementById("calculator_main");

console.log(calculator_main.firstChild);

async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";
const teste = document.getElementById("teste");

async function generate() {
  for await (const val of foo()) {
    str = str + val;
    teste.innerText = str;
  }
  console.log(str);
}

// generate();

const linguagens = window.navigator.languages;

  for (let index = 0; index < linguagens.length; index++) {
    const listagem = document.createElement("li");
    teste.appendChild(listagem);
    listagem.innerText = linguagens[index];
  }

  console.log(teste.childNodes)