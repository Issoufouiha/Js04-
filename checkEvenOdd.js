function pairOuImpair(nombre) {
    if (nombre % 2 === 0) {
      return "pair";
    } else {
      return "impair";
    }
  }
//Cette fonction utilise l'opérateur modulo (%) pour déterminer si le nombre est pair ou impair. Si le reste de la division par 2 est égal à zéro, le nombre est pair et la fonction renvoie "pair". Sinon, la fonction renvoie "impair". 
console.log(pairOuImpair(4));
console.log(pairOuImpair(7));
