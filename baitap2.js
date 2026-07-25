// Bé tập viết code
// Bài 2: Vòng quay may mắn của sóc nhí
function VongQuayMayMan(luckyNumber) {
  const arr = luckyNumber.trim().split(/\s+/);
  if (arr.length < 1 || arr.length === '')
    return;
  const N = Number(arr[0]);
  let soluongHatDe = 0;
  let soluongTao = 0;
  let soluongKeoMat = 0;
  let soluongHopQua = 0;
  for (i = 0; i < N; i++) {
    const num = Number(arr[i]);
    if (num > 0 && num <= 40) {
      soluongHatDe++;
    } else if (num > 40 && num <= 70) {
      soluongTao++;
    } else if (num > 70 && num <= 90) {
      soluongKeoMat++;
    } else {
      soluongHopQua++;
    }


  }
  console.log(`Hat de: ${soluongHatDe}`);
  console.log(`Tao: ${soluongTao}`);
  console.log(`Keo mat: ${soluongKeoMat}`);
  console.log(`hop qua: ${soluongHopQua}`);

}
const luckyNumber = `10
5 88 42 100 15 71 30 95 60 40
`;
VongQuayMayMan(luckyNumber);