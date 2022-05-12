// "abccccccd"
// "apple 12311111"
function maxChars(str: string) {
  const countsLetter: Record<string, number> = {}
  const values = [];
  for(let letter of str) {
    countsLetter[letter] = (countsLetter[letter] || 0) + 1
  }
  for(let count in countsLetter) {
    values.push(countsLetter[count])
  }
  return Math.max(...values)
}

export default maxChars;
