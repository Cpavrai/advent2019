var input = [
  /* input */
];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const offset = [4, 4, 2, 2];
const modified_locations = [];

function getValue(tab, index) {
  if (modified_locations.includes(index)) return getValue(tab, tab[index]);
  return index;
}

function adding(tab, frst, scnd, location, instantf, instants) {
  tab[location] = (instantf ? frst : tab[frst]) + (instants ? scnd : tab[scnd]);
  modified_locations.push(location);
}

function timing(tab, frst, scnd, location, instantf, instants) {
  tab[location] = (instantf ? frst : tab[frst]) * (instants ? scnd : tab[scnd]);
  modified_locations.push(location);
}

function saving(tab, location) {
  return new Promise((resolve, reject) => {
    rl.question("Input asked : ", function(answer) {
      tab[location] = parseInt(answer);
      modified_locations.push(location);
      rl.close();
      resolve();
    });
  });
}

function showing(tab, first, instant) {
  let output = instant ? first : tab[first];
  if (output != 0) console.log("Result : ", output);
}

async function compute(tab) {
  let i = 0;

  while (tab[i] != 99 && i < tab.length) {
    if (tab[i] % 10 == 1)
      adding(
        tab,
        tab[i + 1],
        tab[i + 2],
        tab[i + 3],
        (tab[i] / 100) % 10 > 1,
        (tab[i] / 1000) % 10 > 1
      );
    else if (tab[i] % 10 == 2)
      timing(
        tab,
        tab[i + 1],
        tab[i + 2],
        tab[i + 3],
        (tab[i] / 100) % 10 > 1,
        (tab[i] / 1000) % 10 > 1
      );
    else if (tab[i] % 10 == 3) await saving(tab, tab[i + 1]);
    else if (tab[i] % 10 == 4)
      showing(tab, tab[i + 1], (tab[i] / 100) % 10 > 1);
    i += offset[(tab[i] % 10) - 1];
  }
  return tab;
}

// compute(input).then((res) => console.log("Fini"));

module.exports = compute;
