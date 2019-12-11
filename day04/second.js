const input = [/* input */]

function getSameDigits(str, idx) {
    let tmp_idx = idx
    while (str[idx] == str[idx + 1]) {
        idx++
    }
    return idx - tmp_idx
}

function isGood(nb) {
  str = String(nb), result = true, i = 0, isDouble = false, tmp = 0

  while (i < str.length - 1) {
    tmp = getSameDigits(str, i)
    if (parseInt(str[i]) > parseInt(str[i + 1])) return false
    else if (tmp > 0) {
        isDouble = (tmp == 1 ? true : isDouble)
        i += tmp
    } else i++
  }
  return result && isDouble
}

function getGoodNumbers(input) {
  let i = input[0], res = []
  while (i < input[1]) {
    if (isGood(i)) res.push(i)
    i++
  }
  return res
}

// console.log("Résultat :", getGoodNumbers(input).length)

module.exports = {
  isGood: isGood,
  getGoodNumbers: getGoodNumbers
};
