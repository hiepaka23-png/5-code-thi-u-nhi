// Bé tập viết code
// Bài 5: Chuyến xe bus giao hàng của ông già Noel
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\r?\n/);
const [N, E] = input[0].split(/\s+/).map(Number);
const edges = [];
for (let i = 1; i <= E; i++) {
    const [u, v, w] = input[i].split(/\s+/).map(Number);
    edges.push([u, v, w]);
}
edges.sort((a, b) => a[2] - b[2]);
const parent = new Array(N + 1);
for (let i = 1; i <= N; i++) {
    parent[i] = i;
}
function find(x) {
    if (parent[x] === x) return x;
    return parent[x] = find(parent[x]);
}
function union(a, b) {
    let pa = find(a);
    let pb = find(b);
    if (pa === pb)
        return false;
    parent[pb] = pa;
    return true;
}
let tong = 0; let dem = 0;
for (const [u, v, w] of edges) {
    if (union(u, v)) {
        tong += w;
        dem++;
    }
}
if (dem === N - 1) {
    console.log(tong);
} else {
    console.log(-1);
}