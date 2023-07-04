const arr = [5, 1, 10, 9, 7, 12, 4, 0, 33, 8, 60, 21];
const a = [-9, 10];
const b = [0, 1];
function merge(a, b) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < a.length && j < b.length) {
    if (a[i] > b[j]) {
      result.push(b[j]);
      j += 1;
    } else {
      result.push(a[i]);
      i += 1;
    }
  }
  while (i === a.length && j < b.length) {
    result.push(b[j]);
    j += 1;
  }
  while (j === b.length && i < a.length) {
    result.push(a[i]);
    i += 1;
  }
  return result;
}
// console.log(merge(a, b));
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  if (arr.length !== 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
console.log(mergeSort(arr));
