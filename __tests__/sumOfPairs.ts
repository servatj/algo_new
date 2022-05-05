import { sumPairs, sumOfPairsOptimized } from '../challenges/sumOfPairs'

describe("Sum of Pairs", function(){
  it("Example Tests", function(){
    expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7]);
    expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6]);
    expect(sumPairs([20, -13, 40], -7)).toEqual(undefined);
    expect(sumPairs([1, 2, 3, 4, 1, 0], 2)).toEqual([1, 1])
    expect(sumPairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7])
    expect(sumPairs([4, -2, 3, 3, 4], 8)).toEqual([4, 4])
    expect(sumPairs([0, 2, 0], 0)).toEqual([0, 0])
    expect(sumPairs([5, 9, 13, -3], 10)).toEqual([13, -3])
  });
});


describe("Sum of Pairs Optimized", function(){
  it("Example Tests", function(){
    expect(sumOfPairsOptimized([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7]);
    expect(sumOfPairsOptimized([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6]);
    expect(sumOfPairsOptimized([20, -13, 40], -7)).toEqual(undefined);
    expect(sumOfPairsOptimized([1, 2, 3, 4, 1, 0], 2)).toEqual([1, 1])
    expect(sumOfPairsOptimized([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7])
    expect(sumOfPairsOptimized([4, -2, 3, 3, 4], 8)).toEqual([4, 4])
    expect(sumOfPairsOptimized([0, 2, 0], 0)).toEqual([0, 0])
    expect(sumOfPairsOptimized([5, 9, 13, -3], 10)).toEqual([13, -3])
  });
});
