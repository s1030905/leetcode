function FS(n) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (n > 1) {
    return FS(n - 1) + FS(n - 2)
  }
}

console.log(FS(0))
console.log(FS(1))
console.log(FS(2))
console.log(FS(3))
console.log(FS(4))
console.log(FS(5))

// [0, 1, 1, 2, 3, 5]