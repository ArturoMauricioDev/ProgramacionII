function acronimo(frase) {
  let resultado = "";
  let fraseMayusculas = frase.toUpperCase();
  let arreglo = fraseMayusculas.split(" ");
  for (let i = 0; i < arreglo.length; i++) {
    if (!(arreglo[i] === "Y" || arreglo[i] === "DE" || arreglo[i] === "DEL")) {
      resultado = resultado + arreglo[i][0];
    }
  }
  return resultado;
}

console.log(acronimo("Ministerio de Educación y cultura"));
console.log(acronimo("Museo antropologico y de arte contemporneo"));
