const uniqueOccurrences = function(arr) {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        if (!map.has(val)) {
            map.set(val, 1)
            continue
        }

        map.set(val, map.get(val) + 1)
    }
    const arrSet = new Set(arr)
    const set = new Set(map.values())

    return arrSet.size === set.size
};

console.log(uniqueOccurrences([1,2,2,1,1,3])) // true
console.log(uniqueOccurrences([1,2])) // false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) // true