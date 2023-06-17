const nums = [84, 11, 16, 97, 1, 20, 87, 66, 43, 42, 39, 52, 88, 7, 74]

function linearSearch(arr, n) {
  const dic = {}
  for (let i = 0; i < arr.length; i++) {
    dic[arr[i]] = i
  }

  if (n in dic) {
    console.log(`Number ${n} 的 index:  ${dic[n]}`)
    return dic[n]
  } else {
    return -1
  }
}

console.log(linearSearch(nums, 88))