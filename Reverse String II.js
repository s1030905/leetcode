// var reverseStr = function (s, k) {
//   if (k > s.length) return s.split("").reverse().join("");
//   const split = s.split("");
//   for (let i = 0; i < s.length; i += 2 * k) {
//     const reverse = split.splice(i, k).reverse();
//     console.log(reverse);
//     split.splice(i, 0, ...reverse);
//   }
//   return split.join("");
// };

var reverseStr = function (s, k) {
  if (k > s.length) return s.split("").reverse().join("");
  for (let i = 0; i < s.length; i += 2 * k) {
    s =
      s.substring(0, i) +
      s.substr(i, k).split("").reverse().join("") +
      s.substring(i + k);
  }
  return s;
};
console.log(reverseStr("abcdefg", 2));
