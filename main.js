/* function RankLastPositif(E, index = null) {
  if (index === null) {
    index = E.length - 1;
  }

  if (index < 0) {
    return -1; // Aucun élément positif trouvé
  }

  if (E[index] > 0) {
    return index; // Renvoie l'index du dernier élément positif trouvé
  }

  return RankLastPositif(E, index - 1);
}

// Exemple d'utilisation avec l'ensemble E
var E = [1, 28, -2, 5, 4, -9, 0, 8, -2, 0];
var resultat = RankLastPositif(E);
console.log(resultat);

function RankFirstPositif(E, index = 0) {
  if (index >= E.length) {
    return -1; // Aucun élément positif trouvé
  }

  if (E[index] > 0) {
    return index; // Renvoie l'index du premier élément positif trouvé
  }

  return RankFirstPositif(E, index + 1);
}

// Exemple d'utilisation avec l'ensemble E
var E = [1, 28, -2, 5, 4, -9, 0, 8, -2, 0];
var resultat = RankFirstPositif(E);
console.log(resultat);
 */

//Exo
