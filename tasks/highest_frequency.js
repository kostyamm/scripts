function highestFrequency(array) {
    const map = new Map()
    let max = 0
    let maxSrt = array[0]

    for (let i = 0; i < array.length; i++) {
        const str = array[i]
        const count = map.get(str) || 0
        map.set(str, count + 1)

        if (count > max) {
            max = count
            maxSrt = str
        }
    }

    return maxSrt
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi