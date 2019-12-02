var tab = [
  /* input */
];
let res = 0;

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

function compute(tab) {
  let i = 0;

  while (tab[i] != 99) {
    if (tab[i] == 1) adding(tab, tab[i + 1], tab[i + 2], tab[i + 3]);
    else if (tab[i] == 2) timing(tab, tab[i + 1], tab[i + 2], tab[i + 3]);
    i += 4;
  }
  return tab;
}

console.log("Résultat : ", compute(recuperateState(tab)));
