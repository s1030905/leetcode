// var maximum69Number = function (num) {
//   let str = num.toString();
//   const index = str.indexOf("6");
//   if (index === -1) {
//     return num;
//   }
//   str = str.replace("6", "9");
//   return Number(str);
// };

// 精簡版 replace 會更換第一個遇到的 replaceAll() 會更換全部
const maximum69Number = (num) => Number(num.toString().replace("6", "9"));

console.log(maximum69Number(9669));
// Input: num = 9669; Output: 9969;
// Input: num = 9996; Output: 9999;
// Input: num = 9996; Output: 9999;
