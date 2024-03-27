const data = [2,1,4,5,7,3,6]

const quickSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    const pivotIndex = Math.floor(array.length / 2)
    const pivot = array[pivotIndex]

    const less = []
    const greater = []

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue
        }

        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.time('quickSort')
console.log(quickSort(data))
console.timeEnd('quickSort')
