export default function sortByHeight(arr) {
    const arr2 = arr.filter(x => x != -1).sort((a,b) => a-b)

    for (let i = 0, j = 0; i < arr.length; i++){
        if (~arr[i]) {
            arr[i] = arr2[j]
            j++
        }
    }
    return arr
}
