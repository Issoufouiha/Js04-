function positifOuNegatif(nombre) {
    if (nombre < 0) {
      return "Negatif";
    } else {
      return "Positif";
    }
  }
  console.log(positifOuNegatif(-4)); // "Negatif"
console.log(positifOuNegatif(7)); // "Positif"
console.log(positifOuNegatif(0)); // "Positif"

module.exports= positifOuNegatif
