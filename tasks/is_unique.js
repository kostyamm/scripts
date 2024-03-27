// function isUnique(string) {
//     for (let i = 0; i < string.length; i++) {
//         const latter = string[i]
//
//         for (let j = i + 1; j < string.length; j++) {
//             const nextLatter = string[j]
//
//             if (latter === nextLatter) {
//                 return false
//             }
//         }
//     }
//
//     return true
// }

// function isUnique(string) {
//     const set = new Set()
//
//     for (let i = 0; i < string.length; i++) {
//         const latter = string[i]
//
//         if (set.has(latter)) {
//             return false
//         }
//
//         set.add(latter)
//     }
//
//     return true
// }

function isUnique(string) {
    const set = new Set(string)

    return string.length === set.size
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false