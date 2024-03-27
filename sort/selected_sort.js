const selectedSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        [array[i], array[min]] = [array[min], array[i]];
    }

    return array
};
