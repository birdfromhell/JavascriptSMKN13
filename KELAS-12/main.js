let a = 10
let b = 2

console.log(a < 15 && b > 10) // false
console.log(a > 15 && b > 10) // false
console.log(a < 15 || b > 10) // true
console.log(a > 15 || b > 10) // true
console.log(!(a < 15)) // false
console.log(!(a < 15 && b > 10)) // true