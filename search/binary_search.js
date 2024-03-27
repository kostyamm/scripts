const binarySearch = (array, findItem) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === findItem) {
            return middle;
        }

        if (array[middle] < findItem) {
            start = middle + 1; // Отбрасываем левую часть массива
        } else {
            end = middle - 1; // Отбрасываем правую часть массива
        }
    }

    return -1;
};

const recursiveBinarySearch = (array, item, start, end) => {
    let middle = Math.floor((start + end) / 2);

    if (item === array[middle]) {
        return middle
    }

    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}
