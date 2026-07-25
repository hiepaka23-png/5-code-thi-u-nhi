// Bé tập viết code
// Bài 1: Chiếc gương tiên đoán
const fs = require('fs');
function solve() {
    const input = fs.readFileSync(0, 'utf-8');
    const words = input.trim().split(/\s+/);
    let index = 0;
    const M = parseInt(words[index++], 10); // số lương ngọn nến
    const K = parseInt(words[index++], 10); // số hàm hash
    const Q = parseInt(words[index++], 10); // số câu lệnh
    const ketQua = [];
    const candles = new Array(M).fill(0);
    for (let q = 0; q < Q; q++) {
        const type = words[index++];
        const name = words[index++];
        let tongASCII = 0;
        for (let i = 0; i < name.length; i++) {
            tongASCII += name.charCodeAt(i);


        }
        const hashes = [];
        for (let i = 0; i < K; i++) {
            let h = (tongASCII * i + 7) % M;
            hashes.push(h);
        }
        if (type === 'ADD') {
            for (let h of hashes) {
                candles[h] = 1;
            }
        } else if (type === 'CHECK') {
            let kiemTra = true;
            for (let h of hashes) {
                if (candles[h] === 0) {
                    kiemTra = false;
                    break;
                }
            }
            if (kiemTra) {
                ketQua.push('CO THE DA DANG KY');
            } else {
                ketQua.push('CHAC CHAN CHUA');
            }
        }
    }
    console.log(ketQua.join('\n'));
}
solve();