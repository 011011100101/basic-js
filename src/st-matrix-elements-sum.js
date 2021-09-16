export default function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((acc,x) => acc+=x, 0)
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i-1][j] !== 0)
        sum+=matrix[i][j]
    }
  }
  return sum
}
