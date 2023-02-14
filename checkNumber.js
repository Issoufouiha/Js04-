function determinerNiveau(n) {
    if (n < 5) {
      console.log("faible");
    } else if (n === 5 || n === 6) {
      console.log("moyen");
    } else {
      console.log("élevé");
    }
  }
  determinerNiveau(3); // "faible"
  determinerNiveau(5); // "moyen"
  determinerNiveau(8); // "élevé"

  module.exports = determinerNiveau