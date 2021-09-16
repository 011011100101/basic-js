export default function minesweeper(matrix) {
  const newMatrix = []
  for (let x of matrix)
    newMatrix.push(Array(x.length).fill(0))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix?.[i - 1]?.[j - 1] === true)
        newMatrix[i][j]++

      if (matrix?.[i - 1]?.[j] === true)
        newMatrix[i][j]++

      if (matrix?.[i - 1]?.[j + 1] === true)
        newMatrix[i][j]++

      if (matrix?.[i]?.[j - 1] === true)
        newMatrix[i][j]++

      if (matrix?.[i]?.[j + 1] === true)
        newMatrix[i][j]++

      if (matrix?.[i + 1]?.[j - 1] === true)
        newMatrix[i][j]++

      if (matrix?.[i + 1]?.[j] === true)
        newMatrix[i][j]++

      if (matrix?.[i + 1]?.[j + 1] === true)
        newMatrix[i][j]++
    }
  }
  return newMatrix
}
