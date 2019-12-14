var input = [3,225,1,225,6,6,1100,1,238,225,104,0,1102,78,40,225,1102,52,43,224,1001,224,-2236,224,4,224,102,8,223,223,101,4,224,224,1,224,223,223,1,191,61,224,1001,224,-131,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1101,86,74,225,1102,14,76,225,1101,73,83,224,101,-156,224,224,4,224,102,8,223,223,101,6,224,224,1,224,223,223,1102,43,82,225,2,196,13,224,101,-6162,224,224,4,224,102,8,223,223,101,5,224,224,1,223,224,223,1001,161,51,224,101,-70,224,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,102,52,187,224,1001,224,-832,224,4,224,102,8,223,223,101,1,224,224,1,224,223,223,1102,19,79,225,101,65,92,224,1001,224,-147,224,4,224,1002,223,8,223,101,4,224,224,1,223,224,223,1102,16,90,225,1102,45,44,225,1102,92,79,225,1002,65,34,224,101,-476,224,224,4,224,102,8,223,223,1001,224,5,224,1,224,223,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,107,226,226,224,1002,223,2,223,1005,224,329,1001,223,1,223,1007,226,226,224,102,2,223,223,1005,224,344,101,1,223,223,1008,226,226,224,102,2,223,223,1005,224,359,1001,223,1,223,8,226,677,224,102,2,223,223,1006,224,374,101,1,223,223,1107,226,677,224,1002,223,2,223,1006,224,389,101,1,223,223,1108,226,677,224,102,2,223,223,1005,224,404,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,419,1001,223,1,223,7,677,226,224,102,2,223,223,1005,224,434,101,1,223,223,1007,677,677,224,102,2,223,223,1005,224,449,1001,223,1,223,108,226,677,224,102,2,223,223,1005,224,464,1001,223,1,223,108,226,226,224,102,2,223,223,1006,224,479,101,1,223,223,107,226,677,224,102,2,223,223,1006,224,494,1001,223,1,223,7,226,226,224,1002,223,2,223,1006,224,509,101,1,223,223,1108,677,226,224,102,2,223,223,1005,224,524,101,1,223,223,1107,677,226,224,102,2,223,223,1005,224,539,101,1,223,223,1008,677,226,224,102,2,223,223,1005,224,554,101,1,223,223,1008,677,677,224,1002,223,2,223,1006,224,569,101,1,223,223,1107,677,677,224,102,2,223,223,1006,224,584,1001,223,1,223,1108,226,226,224,1002,223,2,223,1006,224,599,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,614,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,629,101,1,223,223,1007,677,226,224,102,2,223,223,1006,224,644,101,1,223,223,8,677,677,224,1002,223,2,223,1006,224,659,101,1,223,223,8,677,226,224,102,2,223,223,1005,224,674,101,1,223,223,4,223,99,226];

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const offset = [4, 4, 2, 2];
const modified_locations = [];

function getValue(tab, index) {
    if (modified_locations.includes(index)) return getValue(tab, tab[index])
    return index
}

function adding(tab, frst, scnd, location, instantf, instants) {
    // console.log(frst, scnd, location, instantf, instants);
    // tab[location] = (instantf && !modified_locations.includes(frst) ? frst : getValue(tab, tab[frst]))
    //                 + (instants && !modified_locations.includes(scnd) ? scnd : getValue(tab, tab[scnd]));
    console.log("Addition de ", (instantf ? frst : tab[frst]), " avec ", (instants ? scnd : tab[scnd]));
    tab[location] = (instantf ? frst : tab[frst])
                        + (instants ? scnd : tab[scnd]);
    console.log("Resultat de l'addition", tab[location]);
    modified_locations.push(location);
}

function timing(tab, frst, scnd, location, instantf, instants) {
    console.log("Multiplication de ", (instantf ? frst : tab[frst]), " avec ", (instants ? scnd : tab[scnd]));
    tab[location] = (instantf ? frst : tab[frst])
                    * (instants ? scnd : tab[scnd]);
    console.log("Resultat de la multiplication", tab[location]);
    modified_locations.push(location);
}

function saving(tab, location) {
    return new Promise((resolve, reject) => {
        rl.question("Input asked : ", function(answer) {
            tab[location] = parseInt(answer);
            modified_locations.push(location);
            rl.close();
            resolve();
        })
    })
}

function showing(tab, first, instant) {
    console.log(instant, first)
    let output = (instant ? first : tab[first])
    if (output != 0)
        console.log("Result : ", output);
}

async function compute(tab) {
    let i = 0;

    while (tab[i] != 99 && i < tab.length) {
        console.log("Instruction : ", tab[i], " avec : ", tab[i + 1], " et ", tab[i + 2], " stocké dans : ", tab[i + 3]);
        if (tab[i] % 10 == 1) adding(tab, tab[i + 1], tab[i + 2], tab[i + 3], (((tab[i] / 100) % 10) > 1), (((tab[i] / 1000) % 10) > 1));
        else if (tab[i] % 10 == 2) timing(tab, tab[i + 1], tab[i + 2], tab[i + 3], (((tab[i] / 100) % 10 > 1)), (((tab[i] / 1000) % 10) > 1));
        else if (tab[i] % 10 == 3) await saving(tab, tab[i + 1]);
        else if (tab[i] % 10 == 4) showing(tab, tab[i + 1], (((tab[i] / 100) % 10) > 1));
        i += offset[tab[i] % 10 - 1];
        // console.log(i)
    }
    return tab;
}

compute(input).then((res) => console.log("Fini"));

module.exports = compute