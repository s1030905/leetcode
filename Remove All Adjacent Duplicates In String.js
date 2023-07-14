// var removeDuplicates = function (s) {
//   const str = s.split("");
//   const arr = [];
//   let i = 0;
//   while (str.length) {
//     let char = str.shift();
//     if (!arr[i]) {
//       arr.push(char);
//     } else if (arr[i] !== char) {
//       arr.push(char);
//       i++;
//     } else if (arr[i] === char) {
//       arr.pop();
//       if (i > 0) i--;
//     }
//     console.log(i);
//   }
//   return arr.join("");
// };
// console.log(removeDuplicates("aaaa"));
// aaaaaaaa;

var removeDuplicates = function (s) {
  let arr = [];
  for (const i of s) {
    arr[arr.length - 1] === i ? arr.pop() : arr.push(i);
  }
  return arr.join("");
};
console.log(removeDuplicates("aaaa"));
