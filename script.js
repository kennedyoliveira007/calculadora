const resultado = document.querySelector(".resultado");
const igual = document.querySelector(".igual");

function insert(valor) {
  console.log(Number(valor));
  if (resultado.innerHTML.length <= 17 || Number.isNaN(Number(valor))) {
    resultado.innerHTML += valor;
  }
}

function clean() {
  resultado.innerHTML = "";
}

function confirma() {
  if (resultado.textContent != "Erro") {
    document.getElementById("resultado").innerHTML = eval(
      resultado.innerHTML
    ); /* eval Retorna resultado.*/
  }
}

function backspace() {
  if (resultado.textContent) {
    let result = document.getElementById("resultado").innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1);
  }
}
