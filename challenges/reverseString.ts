export const reverseBuildIn = (word: string) => {
  return word.split('').reverse().join('')
}

export const reverse = (word: string) => {
  let reversedWord = '';
  for (let i = 0; i < word.length; i ++) {
    reversedWord = word.charAt(i) + reversedWord
  }
  return reversedWord;
}

export const reverseReduce = (word: string) => {
  return word.split('').reduce((acc, curr) => curr + acc)
}

export default {
  reverse,
  reverseBuildIn
}
