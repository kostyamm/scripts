const tree = [
    {
        value: 5,
        children: [
            { value: 10, children: [{ value: 11 }] },
            { value: 7, children: [{ value: 5, children: [{ value: 1 }] }] },
        ],
    },
    {
        value: 5,
        children: [
            { value: 10 },
            { value: 15 },
        ],
    },
]

const treeRecursive = (tree) => {
    let sum = 0
    tree.forEach(node => {
        sum += node.value

        if (!node.children) {
            return node.value
        }

        sum += treeRecursive(node.children)
    })

    return sum
}

const treeIteration = (tree) => {
    const stack = []
    let sum = 0

    tree.forEach(node => stack.push(node))

    while (stack.length) {
        const current = stack.pop()
        sum += current.value

        if (current.children) {
            current.children.forEach(node => stack.push(node))
        }
    }

    return sum
}

console.time('Recursive')
console.log('Recursive result:', treeRecursive(tree))
console.timeEnd('Recursive')

console.log('---')

console.time('Iteration')
console.log('Iteration result:', treeIteration(tree))
console.timeEnd('Iteration')
