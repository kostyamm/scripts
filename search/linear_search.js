const linearSearch = (arr, findEl) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === findEl) {
            return i
        }
    }
    return -1
}