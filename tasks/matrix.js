const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// rotate 90
function rotate(source) {
    const result = []

    source.forEach((items) => {
        items.forEach((item, itemIndex) => {
            const resItems = result[itemIndex] || []

            result[itemIndex] = [item, ...resItems]
        })
    })

    return result
}

// rotate 180
function rotate180(source) {
    return rotate(rotate(source))
}

/**
 * [1,2,3]    [7,4,1]
 * [4,5,6] -> [8,5,2]
 * [7,8,9]    [9,6,3]
 * */
console.log(rotate(matrix))
console.log(rotate180(matrix))