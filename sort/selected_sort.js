// const selectedSort = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let min = i;
//
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[min] > array[j]) {
//                 min = j;
//             }
//         }
//
//         [array[i], array[min]] = [array[min], array[i]];
//     }
//
//     return array
// };

const data = [2,1,4,5,7,3,6]

const findMin = (array) => {
    let minIndex = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i
        }
    }

    return minIndex
}

const selectedSort = (array) => {
    const sortedData = []
    const arrLength = array.length

    for (let i = 0; i < arrLength; i++) {
        const min = findMin(array)
        sortedData.push(...array.splice(min, 1))
    }

    return sortedData
}

console.log(selectedSort(data))