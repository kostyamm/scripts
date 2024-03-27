// Поиск в ширину в графе
const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)

    while (queue.length > 0) {
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'))

// // Пример кода в дереве
// const dfs = (tree, start) => {
//     const stack = [start];
//
//     while (stack.length > 0) {
//         const vert = stack.shift(); // Выбираем первую вершину из стека
//
//         if (tree[vert]) {
//             stack.unshift(...tree[vert]); // Добавляем вершины в начало стека
//         }
//     }
// };
//
// // Пример кода в графе
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