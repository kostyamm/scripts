// array.flat(Infinity)
function flatten(array) {
    const result = []

    array.forEach(i => {
        if (!Array.isArray(i)) {
            result.push(i)
            return result
        }

        result.push(...flatten(i))
    })

    return result
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]