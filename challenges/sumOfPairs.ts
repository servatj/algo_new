export function sumPairs(ints: number[], s: number) {
  let result = undefined
  let distance = 0
  for(let j = 0; j < ints.length; j++) {
    for (let i = j + 1; i < ints.length; i++) {
      const calc = ints[j] + ints[i]
      if (calc === s && (distance === 0 || i - j < distance )) {
          result = [ints[j], ints[i]]
          distance = i - j
      }
    }
  }
  return result
}

export const sumOfPairsOptimized = (ints: number[], s: number) => {
  const seen: Record<number, boolean> = {}
  for(let i = 0; i < ints.length; i++) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]]
    seen[ints[i]] = true
  }
}
