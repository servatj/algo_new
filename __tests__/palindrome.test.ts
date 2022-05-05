import { isPalindrome, isPalindromeAlt } from '../challenges/palindrome'

describe('palindrome', () => {
  test('abba should be true', () => {
    expect(isPalindrome('abba')).toBe(true);
  })
  test('abcdefg should be true', () => {
    expect(isPalindrome('abcdefg')).toBe(false);
  })
})

describe('palindrome alternative', () => {
  test('abba should be true', () => {
    expect(isPalindromeAlt('abba')).toBe(true);
  })
  test('abcdefg should be false', () => {
    expect(isPalindromeAlt('abcdefg')).toBe(false);
  })
})
