// Bé tập viết code
// Bài 4: Ba lô kẹo ma thuật của phù thủy nhí
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\r?\n/);
const [N, K] = input[0].split(/\s+/).map(Number);
const doNgot = new Array(K + 1).fill(0);
for (let i = 1; i <= N; i++) {
    const [W, V] = input[i].split(/\s+/).map(Number);
    for (let j = K; j >= W; j--) {
        doNgot[j] = Math.max(doNgot[j], doNgot[j - W] + V);
    }
}
console.log(doNgot[K]);