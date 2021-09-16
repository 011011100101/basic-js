export default function deleteDigit(n) {
  const digits = String(n).split('').map(x=>+x)
  const index = digits.lastIndexOf(Math.min(...digits))
  digits.splice(index, 1)
  return +digits.join('')
}
