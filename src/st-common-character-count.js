export default function getCommonCharacterCount(s1, s2) {
  if (s1.length == 0 || s2.lenght == 0)
    return 0

  let count = 0;
  s1 = countChars(s1)
  s2 = countChars(s2)
  for (let char in s1)
    if (s2[char])
      count += Math.min(s1[char], s2[char])

  return count
}
function countChars(s) {
  const arr = s.split('').sort().join('').match(/(.)\1*/g)
  const chars = {}
  for (let a of arr)
    chars[a[0]] = a.length
  return chars
}
