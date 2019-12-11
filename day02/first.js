var input = [
  /* input */
];

function recuperateState(tab) {
  tab[1] = 12;
  tab[2] = 2;
  return tab;
}

function adding(tab, frst, scnd, output) {
  tab[output] = tab[frst] + tab[scnd];
}

function timing(tab, frst, scnd, output) {
  tab[output] = tab[frst] * tab[scnd];
}

function compute(tab, special=false) {
  let i = 0;

  if (special) tab = recuperateState(tab);
  while (tab[i] != 99 && tab[i]) {
    if (tab[i] == 1) adding(tab, tab[i + 1], tab[i + 2], tab[i + 3]);
    else if (tab[i] == 2) timing(tab, tab[i + 1], tab[i + 2], tab[i + 3]);
    i += 4;
  }
  return tab;
}

module.exports = compute

// console.log("Résultat : ", compute(tab, true));
