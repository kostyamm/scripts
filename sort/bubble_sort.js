const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Меняем значения переменных
            }
        }
    }

    return array
};

const data = [11,2,3,5,6,4,36,45,25,34,52,67,87,68]
console.log(bubbleSort(data))