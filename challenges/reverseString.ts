export const reverseBuildIn = (word: string) => {
  // Call reverse method of the array
  // Join the array back
  // Turn string into an array
  // return result
  return word.split('').reverse().join('')
}

export const reverse = (word: string) => {
  // Create an empty string called reversed
  // for each character in provided string
      // take the character and add it to the start of 'reversed'
  // return the variable reversed
  let reversedWord = '';
  for (let i = 0; i < word.length; i ++) {
    reversedWord = word.charAt(i) + reversedWord
  }
  return reversedWord;
}

export const reverseForOf = (word: string) => {
  // Create an empty string called reversed
  // for each character in provided string
      // take the character and add it to the start of 'reversed'
  // return the variable reversed
  let reversedWord = '';
  for (const character of word) {
    reversedWord = character + reversedWord
  }
  return reversedWord;
}

export const reverseReduce = (word: string) => {
  // convert into array
  // use reduce to concat each character reversed
  return word.split('').reduce((acc, curr) => curr + acc)
}

export default {
  reverse,
  reverseBuildIn
}
