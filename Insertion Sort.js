const arr = [5, 1, 10, 9, 7, 12, 4, 0, 33, 8, 60, 21];

// for 寫法
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] > arr[j + 1]) {
//         tmp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort(arr));

// while 寫法
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (key < arr[j]) {
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
      j -= 1;
    }
  }
  return arr;
}
console.log(insertionSort(arr));
