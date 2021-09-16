export default function countCats(backyard) {
  return backyard.join(',').split(',').filter(e => e == '^^').length;
}
