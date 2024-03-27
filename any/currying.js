const currying = (a) => {
    let val = a
    return (b) => {
        if (!b) {
            return val
        }

        return currying(val + b)
    }
}

console.log(currying(1)())  // 1
console.log(currying(1)(2)()) // 3
console.log(currying(1)(2)(3)()) // 6

function sum(a, b) {
    if (!a) {
        return sum
    }
    if (!b) {
        return function subSum(c) {
            if (!c) {
                return subSum
            }

            return a + c
        }
    }

    return a + b
}

console.log(sum(20, 22)) // -> 42
console.log(sum(20)(22)) // -> 42
console.log(sum(20)()(22)) // -> 42
console.log(sum(20)()()()(22)) // -> 42
console.log(sum(20)()()()()()()()()()()()(22)) // -> 42
console.log(sum()(20)(22)) // -> 42
console.log(sum()()()()(20)(22)) // -> 42
console.log(sum()(20)()(22)) // -> 42
console.log(sum()()()()()(20)()()()(22)) // -> 42