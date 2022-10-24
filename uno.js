function contadorDeVocalesYConsonantes(cadena) {
  let vocales = 0;
  let consonantes = 0;
  let cadenaNormalizada = cadena.toLowerCase();
  for (let i = 0; i < cadenaNormalizada.length; i++) {
    switch (cadenaNormalizada[i]) {
      case "a":
        vocales++;
        break;
      case "e":
        vocales++;
        break;
      case "i":
        vocales++;
        break;
      case "o":
        vocales++;
        break;
      case "u":
        vocales++;
        break;
      case " ":
        break;

      default:
        consonantes++;
        break;
    }
  }
  console.log("La cantidad de vocales es: " + vocales);
  console.log("La cantidad de constonates es: " + consonantes);
}

contadorDeVocalesYConsonantes("JavaScript     Java     C  Python   Ruby");
