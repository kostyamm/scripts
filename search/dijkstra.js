const mockGraphDijkstra = {
    a: { value: 'a', edges: [{ node: 'b', weight: 1 }, { node: 'c', weight: 4 }] },
    b: { value: 'b', edges: [{ node: 'd', weight: 2 }, { node: 'e', weight: 5 }] },
    c: { value: 'c', edges: [{ node: 'f', weight: 3 }] },
    d: { value: 'd', edges: [{ node: 'g', weight: 1 }] },
    e: { value: 'e', edges: [{ node: 'h', weight: 2 }] },
    f: { value: 'f', edges: [{ node: 'i', weight: 1 }] },
    g: { value: 'g', edges: [] },
    h: { value: 'h', edges: [] },
    i: { value: 'i', edges: [] }
};

const getLowestCostNode = (queue) => {
    let min = Infinity;
    let lowIndex;

    for (let i = 0; i < queue.length; i++) {
        const [, value] = queue[i];
        if (value < min) {
            min = value;
            lowIndex = i;
        }
    }

    return queue.splice(lowIndex, 1)[0];
};

const dijkstra = (graph, start) => {
    const parents = {};
    const costs = {};
    const queue = [];

    for (let vert in graph) {
        if (vert === start) {
            costs[vert] = 0;
            queue.push([vert, 0]);
        } else {
            costs[vert] = Infinity;
            queue.push([vert, Infinity]);
        }
        parents[vert] = null;
    }

    while (queue.length) {
        const node = getLowestCostNode(queue);
        let [vert, value] = node;
        const cost = costs[vert];

        if (node || value !== Infinity) {
            for (let subNode in graph[vert]) {
                const nextSubNodeValue = graph[vert][subNode];
                const newCost = cost + nextSubNodeValue;
                if (costs[subNode] > newCost) {
                    costs[subNode] = newCost;
                    parents[subNode] = vert;
                    queue.push([subNode, newCost]);
                }
            }
        }
    }
};

console.log(dijkstra(mockGraphDijkstra, 'a'))
