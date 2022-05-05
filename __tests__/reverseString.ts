import { reverseBuildIn, reverse, reverseReduce, reverseForOf } from '../challenges/reverseString';

describe('Reverse algorithm', () => {
  test('Build in reverse', () => {
    expect(reverseBuildIn('apple')).toBe('elppa')
    expect(reverseBuildIn('hello')).toBe('olleh')
    expect(reverseBuildIn('Greetings!')).toBe('!sgniteerG')
  })

  test('Normal reverse', () => {
    expect(reverse('apple')).toBe('elppa')
    expect(reverse('hello')).toBe('olleh')
    expect(reverse('Greetings!')).toBe('!sgniteerG')
  })

  test('Normal reverse', () => {
    expect(reverseForOf('apple')).toBe('elppa')
    expect(reverseForOf('hello')).toBe('olleh')
    expect(reverseForOf('Greetings!')).toBe('!sgniteerG')
  })

  test('Normal reverse', () => {
    expect(reverseReduce('apple')).toBe('elppa')
    expect(reverseReduce('hello')).toBe('olleh')
    expect(reverseReduce('Greetings!')).toBe('!sgniteerG')
  })
})
