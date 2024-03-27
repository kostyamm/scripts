function isStringRotated(source, test) {
    // if (source.length !== test.length) {
    //     return false
    // }
    //
    // for (let i = 0; i < source.length; i++) {
    //     const rotate = source.slice(i, source.length) + source.slice(0, i)
    //
    //     if (rotate === test) {
    //         return true
    //     }
    // }
    //
    // return false

    return source.length === test.length && (source + source).includes(test)
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false