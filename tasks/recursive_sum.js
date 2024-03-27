const recursive_sum = (arr) => {
    if (!arr.length) {
        return 0
    }

    const [val, ...restNums] = arr

    return val + recursive_sum(restNums)
}

console.log(recursive_sum([1, 2, 3]))