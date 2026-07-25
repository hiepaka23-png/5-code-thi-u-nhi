// Bé tập viết code
// Tìm đường đi cho thỏ mèo
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\r?\n/);
const [M, N] = input[0].split(" ").map(Number);
const grid = [];
let start = null;
let end = null;

for (let i = 0; i < M; i++) {
  grid.push(input[i + 1].split(""));
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === 'T') {
      start = [i, j];
    } else if (grid[i][j] === 'H') {
      end = [i, j];
    }
  }
}

const visited = Array.from({ length: M }, () => new Array(N).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];

queue.push([start[0], start[1], 0]);
visited[start[0]][start[1]] = true;

let head = 0;
while (head < queue.length) {
  const [x, y, dist] = queue[head++];
  if (x === end[0] && y === end[1]) {
    console.log(dist);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[nx][ny] && grid[nx][ny] !== '#' && grid[nx][ny] !== 'C') {
      visited[nx][ny] = true;
      queue.push([nx, ny, dist + 1]);
    }
  }
}
console.log(-1);