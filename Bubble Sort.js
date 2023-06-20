const arr = [1, 5, 10, 9, 7, 12, 4, 0, 33, 8, 60, 21];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;
    for (let j = arr.length - i - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
        swap = true;
      }
      if (swap === false) {
        break;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
