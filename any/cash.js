const factorial = (n) => {
    if (n === 1) return 1
    return n * factorial(n - 1)
}

const cashFn = (fn) => {
    const cash = {}

    return function (n) {
        if (cash[n]) {
            console.log('cash')
            return cash[n]
        }

        console.log('calc')
        const result = fn(n)
        cash[n] = result
        return result
    }
}

const q = cashFn(factorial)

console.time('calc')
q(5)
console.timeEnd('calc')

console.time('cash')
q(5)
console.timeEnd('cash')
