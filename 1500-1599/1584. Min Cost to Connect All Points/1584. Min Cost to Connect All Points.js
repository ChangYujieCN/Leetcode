
/**
 * @param {number[][]} points
 * @return {number}
 */
// kruskal 
const minCostConnectPoints = function (points) {
    const dist = (x, y) => {
        return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
    };
    const getRoot = (arr, vertex) => {
        while (vertex !== arr[vertex]) vertex = arr[vertex];
        return vertex;
    };
    const n = points.length;
    const edges = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            edges.push([dist(i, j), i, j]);
        }
    }
    edges.sort((a, b) => a[0] - b[0]);
    const disjointSet = Array(n);
    let sum = 0;
    for (let i = 0; i < n; i++) disjointSet[i] = i;
    for (let i = 0; i < edges.length; i++) {
        const a = getRoot(disjointSet, edges[i][1]);
        const b = getRoot(disjointSet, edges[i][2]);
        if (a !== b) {
            disjointSet[a] = b;
            sum += edges[i][0];
        }
    }
    return sum;
};
// prim
const minCostConnectPoints = function (points) {
    const dist = (x, y) => {
        return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
    };
    const n = points.length;
    const graph = Array.from({ length: n }, e => Array(n).fill(0));
    const vertexSet = []; //查看顶点有没有并入树中
    const lowCost = [];
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
            const dis = dist(i, j);
            graph[i][j] = graph[j][i] = dis;
        }
    for (let i = 0; i < graph.length; i++) {
        lowCost[i] = graph[0][i];
        vertexSet[i] = 0;
    }
    vertexSet[0] = 1; // 将顶点0归入
    let sum = 0;
    let flag;
    let v = 0;
    //目的是将所有顶点归入 已经有一个顶点  所以只需要再走 graph.length - 1遍
    for (let i = 0; i < graph.length - 1; i++) {
        let min = Infinity;
        for (let j = 0; j < graph.length; j++)
            if (vertexSet[j] === 0 && lowCost[j] < min) {
                min = lowCost[j]; flag = j;
            }
        vertexSet[flag] = 1;
        v = flag;
        sum += min;
        for (let j = 0; j < graph.length; j++)
            // 新加入的节点 可能会导致我们整个树到某个顶点的距离变近  要更新距离
            if (vertexSet[j] === 0 && graph[v][j] < lowCost[j])
                lowCost[j] = graph[v][j];
    }
    return sum;
};
