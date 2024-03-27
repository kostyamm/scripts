const factorial = (n) => {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

const factorialIteration = (n) => {
    let result = 1

    while (n !== 1) {
        result *= n
        n -= 1
    }

    return result
}

console.log(factorial(5))
console.log(factorialIteration(5))