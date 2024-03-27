function deepEqual(a, b) {
    let result = true

    for (let key of Object.keys(a)) {
        const aVal = a[key]
        const bVal = b[key]

        if (typeof aVal === 'object') {
            result = deepEqual(aVal, bVal)
            continue
        }

        result = aVal === bVal
    }

    return result
}

const source = { a: 1, b: { c: 1 } }
const test1 = { a: 1, b: { c: 1 } }
const test2 = { a: 1, b: { c: 2 } }
console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> false
