// const fibonacci = (n) => {
//     if (n === 1 || n === 2) {
//         return 1
//     }
//
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// const fibonacci = (n) => {
//     const seq = [1, 1]
//     if (n < 2) return [1]
//
//     while (seq.length < n) {
//         const last = seq[seq.length - 1]
//         const prev = seq[seq.length - 2]
//
//         seq.push(prev + last)
//     }
//
//     return seq
// }

const fibonacciBase = () => {
    const seq = [1, 1]
    return (n) => {
        if (seq.length >= n) {
            return [...seq].splice(0, n)
        }

        while (seq.length < n) {
            const last = seq[seq.length - 1]
            const prev = seq[seq.length - 2]

            seq.push(prev + last)
        }

        return seq
    }
}
const fibonacci = fibonacciBase()

console.log(fibonacci(8))
console.log(fibonacci(9))
console.log(fibonacci(9))
console.log(fibonacci(1))
