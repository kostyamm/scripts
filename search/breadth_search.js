// Поиск в ширину/глубину в графе

const mockGraph = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f'],
    d: ['g'],
    e: ['h'],
    f: ['i'],
    g: [],
    h: [],
    i: []
}

const mockGraphObject = {
    a: { value: 'a', children: ['b', 'c'] },
    b: { value: 'b', children: ['d', 'e'] },
    c: { value: 'c', children: ['f', 'b'] },
    d: { value: 'd', children: ['g', 'b'] },
    e: { value: 'e', children: ['h', 'd'] },
    f: { value: 'f', children: ['i'] },
    g: { value: 'g', children: [] },
    h: { value: 'h', children: [] },
    i: { value: 'i', children: [] }
}

// Поиск в ширину
// PS по хорошему тоже использовать флаг visited
const bfs = (graph, start, end) => {
    const queue = []
    queue.push(start)

    while (queue.length > 0) {
        const current = queue.shift()
        const currentChildren = graph[current]

        if (!currentChildren) {
            graph[current] = []
        }

        if (currentChildren.includes(end)) {
            return true
        }

        queue.push(...currentChildren)
    }
    return false
}

// Поиск в глубину
const dfs = (graph, start, end) => {
    if (start === end) return true

    const current = graph[start]

    if (current.visited) return false
    current.visited = true

    const children = current.children

    for (const neighbor of children) {
        const neighborData = graph[neighbor]

        const reached = dfs(graph, neighborData.value, end)
        if (reached) return true
    }

    return false
}

// // Поиск в глубину
// const dfs = (graph, start) => {
//     const visited = {};
//     const stack = [start];
//
//     while (stack.length !== 0) {
//         const vert = stack.shift(); // Выбираем первую вершину из стека
//
//         if (!visited[vert]) {
//             visited[vert] = true; // Отмечаем вершину как пройденую, если ранее не проходили её
//         }
//
//         if (graph[vert]) {
//             for (let subVert of graph[vert]) {
//                 if (!visited[subVert]) {
//                     stack.unshift(subVert); // Добавляем вершину в начало стека
//                 }
//             }
//         }
//     }
// };

console.log(bfs(mockGraph, 'a', 'i'))
console.log(dfs(mockGraphObject, 'a', 'i'))