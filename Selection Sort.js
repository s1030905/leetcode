// const arr = [5, 1, 10, 9, 7, 12, 4, 0, 33, 8, 60, 21];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let j = i + 1;
    while (j < arr.length) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      j += 1;
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}
console.log(selectionSort(arr));
