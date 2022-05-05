export const reverseInteger = (number: number) => {
  const reverse = Number(number.toString().replace('-','').split('').reverse().join(''))
  return number < 0 ? -reverse : reverse
}

export default {
  reverseInteger,
}
