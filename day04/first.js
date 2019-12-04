const input = [/* input */]

function isGood(nb) {
  str = String(nb), result = true, i = 0, isDouble = false

  while (i < str.length) {
    if (i > 0 && parseInt(str[i]) < parseInt(str[i - 1])) return false
    else if (parseInt(str[i]) == parseInt(str[i - 1])) isDouble = true
    i++
  }
  return result & isDouble
}

function getGoodNumbers(input) {
  let i = input[0], res = []
  while (i < input[1]) {
    if (isGood(i)) res.push(i)
    i++
  }
  return res
}

console.log("Résultat :", getGoodNumbers(input).length)
