Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.


function sortedSquares(nums) {
  return nums.map(x => x * x).sort((a, b) => a - b);
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// Output: [0, 1, 9, 16, 100]
