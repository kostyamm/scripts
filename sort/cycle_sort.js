function cycleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let position = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < value) {
                position++;
            }
        }
        if (position === i) {
            continue;
        }
        while (value === arr[position]) { // Избавляемся от дубликатов
            position++;
        }

        [arr[position], value] = [value, arr[position]]; // Меняем значения переменных

        while (position !== i) { // Запускаем цикл в обратную сторону
            position = i;
            for (let k = i + 1; k < arr.length; k++) {
                if (arr[k] < value) {
                    position++;
                }
            }
            while (value === arr[position]) { // Избавляемся от дубликатов
                position++;
            }
            [arr[position], value] = [value, arr[position]]; // Меняем значения пременных
        }
    }
    return arr;
}