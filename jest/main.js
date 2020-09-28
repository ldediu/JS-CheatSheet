const allFuns = {}


// Recursively removes the character at the given index from a string.
const removeCharX = (str, idx, i=0, result='') => {
    if (i === str.length) {
      return result
    }
    if (i !== idx) {
      result = result + str[i]
    }
    return removeCharX(str, idx, i + 1, result)
}

// Determines whether two strings have fewer than 3 different characters. Both arguments will have the same length.
const less3Diff = (str1, str2, i=0, differences=0) => {
    if (i === str1.length) {
        return true
    }
        if (differences > 2) { 
        return false
    }
    if (str1[i] !== str2[i]) {
        differences = differences + 1
    }
    return less3Diff(str1, str2, i + 1, differences)
}

// Takes in a string, and returns a new string with the input string reversed.
const reverso = (str, i = 0, result='') => {
    if (result.length === str.length) {
      return result
    }
    return reverso(str, i + 1, str[i] + result)
  }

allFuns.removeCharX = removeCharX
allFuns.less3Diff = less3Diff
allFuns.reverso = reverso

module.exports = allFuns