export default function encodeLine(str) {
  return str.replace(/(.)\1+/g, x => x.length+x[0])
}
