// var input = [3,8,1001,8,10,8,105,1,0,0,21,34,55,68,93,106,187,268,349,430,99999,3,9,102,5,9,9,1001,9,2,9,4,9,99,3,9,1001,9,5,9,102,2,9,9,101,2,9,9,102,2,9,9,4,9,99,3,9,101,2,9,9,102,4,9,9,4,9,99,3,9,101,4,9,9,102,3,9,9,1001,9,2,9,102,4,9,9,1001,9,2,9,4,9,99,3,9,101,2,9,9,1002,9,5,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,99,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,99];

const readline = require("readline");

const offset = [4, 4, 2, 2, 3, 3, 4, 4];
const modified_locations = [];

function getValue(tab, index) {
    if (modified_locations.includes(index)) return getValue(tab, tab[index])
    return index
}

function adding(tab, frst, scnd, location, instantf, instants) {
    tab[location] = (instantf ? frst : tab[frst])
                    + (instants ? scnd : tab[scnd]);
    modified_locations.push(location);
}

function timing(tab, frst, scnd, location, instantf, instants) {
    tab[location] = (instantf ? frst : tab[frst])
                    * (instants ? scnd : tab[scnd]);
    modified_locations.push(location);
}

function saving(tab, location, input) {
    if (input.length) {
        tab[location] = parseInt(input.splice(0,1));
        return;
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        rl.question("Input asked : ", function(answer) {
            tab[location] = parseInt(answer);
            modified_locations.push(location);
            rl.close();
            resolve();
        })
    })
}

function showing(tab, first, instant, slot=undefined) {
    let output = (instant ? first : tab[first]);
    if (output != 0) {
        return output;
    }
    return null;
}

function jump(tab, value, instantf, jump_idx, instants, state, index) {
    value = (instantf ? value : tab[value]);
    if ((value == 0) == state) return (instants ? jump_idx : tab[jump_idx]);
    return index + 3;
}

function compare(tab, first, instantf, second, instants, position, operator) {
    switch (operator) {
        case "<":
            tab[position] = Number((instantf ? first : tab[first]) < (instants ? second : tab[second]));
            break;
        case ">":
            tab[position] = Number((instantf ? first : tab[first]) > (instants ? second : tab[second]));
            break;
        case "=":
            tab[position] = Number((instantf ? first : tab[first]) == (instants ? second : tab[second]));
            break;
        default:
            tab[position] = 0;
    }
}

async function compute(tab, input=[]) {
    let i = 0, order, slot = undefined;

    while (tab[i] != 99 && i < tab.length) {
        order = tab[i] % 10;
        if (order == 1) adding(tab, tab[i + 1], tab[i + 2], tab[i + 3], (Math.floor((tab[i] / 100) % 10) == 1), (Math.floor((tab[i] / 1000) % 10) == 1));
        else if (order == 2) timing(tab, tab[i + 1], tab[i + 2], tab[i + 3], (((tab[i] / 100) % 10 > 1)), (Math.floor((tab[i] / 1000) % 10) == 1));
        else if (order == 3) await saving(tab, tab[i + 1], input);
        else if (order == 4) slot = showing(tab, tab[i + 1], (Math.floor((tab[i] / 100) % 10) == 1));
        else if (order == 5) i = jump(tab, tab[i + 1], (Math.floor((tab[i] / 100) % 10) == 1), tab[i + 2], (Math.floor((tab[i] / 1000) % 10) == 1), false, i);
        else if (order == 6) i = jump(tab, tab[i + 1], (Math.floor((tab[i] / 100) % 10) == 1), tab[i + 2], (Math.floor((tab[i] / 1000) % 10) == 1), true, i);
        else if (order == 7) compare(tab, tab[i + 1], (Math.floor((tab[i] / 100) % 10) == 1), tab[i + 2], (Math.floor((tab[i] / 1000) % 10) == 1), tab[i + 3], "<");
        else if (order == 8) compare(tab, tab[i + 1], (Math.floor((tab[i] / 100) % 10) == 1), tab[i + 2], (Math.floor((tab[i] / 1000) % 10) == 1), tab[i + 3], "=");
        if (![5,6].includes(order))
            i += offset[order - 1];
    }
    return slot || 0;
}

async function computeThruster(tab, settings) {
    let output = [0], idx = 0;

    while (settings[idx] != undefined) {
        output.push(await compute([...tab], [settings[idx], output[idx]]));
        idx++;
    }
    return Number(output[idx]);
}

function getChildCombination(key, array) {
    if (array.length == 0) {
        return key
    }
    else {
        let idx = 0, res = [];

        while (array[idx] != undefined) {
            res.push(getChildCombination(key.concat([array[idx]]), array.filter((a) => a != array[idx])))
            idx++
        }
        return res;
    }
}

function getCombinations(chars) {
    var result = [], index = 0, new_res = [];

    while (chars[index] != undefined) {
        result.push(getChildCombination([chars[index]], chars.filter((a) => a != chars[index])))
        index++;
    }
    result.forEach((frst) => {
        frst.forEach((scnd) => {
            scnd.forEach((thrd) => {
                thrd.forEach((frth) => {
                    frth.forEach((ffth) => {
                        new_res.push(ffth);
                    })
                })
            })
        })
    })
    return new_res;
}

async function findMaxThruster(tab, chars=[0, 1, 2, 3, 4]) {
    let result = {
        value: undefined,
        combi: undefined
    }, combiList = getCombinations(chars), idx = 0, res;

    while (combiList[idx] != undefined) {
        res = await computeThruster([...tab], combiList[idx])
        if (result.value == undefined || res > result.value) {
            result = {
                value: res,
                combi: combiList[idx]
            }
        }
        idx++;
    };
    return result;
}

// findMaxThruster(input).then((res) => console.log(res))

module.exports.findMaxThruster = findMaxThruster