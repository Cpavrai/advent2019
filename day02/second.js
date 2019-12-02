var tab = [/*input*/];
let res = 0, fi = 0, si = 0;

function recuperateState(tab, f, s) {
    var new_tab = [...tab]
    new_tab[1] = f;
    new_tab[2] = s;
    return new_tab;
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

while (compute(recuperateState(tab, fi, si))[0] != 19690720 && fi < 99) {
    if (si < 99) si++;
    else if (fi < 99) {
        fi++
        si = 0
    }
}

if (si == 99 && fi == 99)
    console.error("No solution")
else
    console.log(`Résultat : noun = ${fi} & verb = ${si}`)
