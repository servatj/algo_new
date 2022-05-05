import { reverseInteger } from '../challenges/reverseInteger';

describe('Reverse algorithm', () => {
  test('Build in reverse', () => {
    expect(reverseInteger(15)).toBe(51)
    expect(reverseInteger(981)).toBe(189)
    expect(reverseInteger(500)).toBe(5)
    expect(reverseInteger(-15)).toBe(-51)
    expect(reverseInteger(-90)).toBe(-9)
  })
})
