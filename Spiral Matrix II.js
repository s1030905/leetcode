var generateMatrix = function (n) {
  let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let count = 0;
  let [size, left, right, top, bottom] = [n * n, 0, n - 1, 0, n - 1];
  while (count < size) {
    for (let i = left; i <= right; i++) {
      count++;
      matrix[top][i] = count;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      count++;
      matrix[i][right] = count;
    }
    right--;
    for (let i = right; i >= left; i--) {
      count++;
      matrix[bottom][i] = count;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      count++;
      matrix[i][left] = count;
    }
    left++;
  }
  return matrix;
};
console.log(generateMatrix(2));
