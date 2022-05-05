export const isPalindrome = (word: string) => {
  return word.split('').reverse().join('') === word
}

export const isPalindromeAlt = ( word: string ) => {
  const characters = word.split('');
  const middle = word.length % 2 === 0 ? word.length / 2 : ((word.length + 1) / 2)
  for(let i = 0; i < middle; i++) {
    if(!(characters[i] === characters[(word.length - 1) - i])) return false
  }
  return true;
}

export default {
  isPalindrome,
  isPalindromeAlt
}
