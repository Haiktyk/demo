function USD2VND(m) {
  const VND = m * 23500;
  console.log(`${m}USD = ${VND}đ`);
}

USD2VND(1);
USD2VND(2);
function compoundInterest(P, r, n, t) {
  const A = P * (1 + r / n) ** (n * t);
  console.log(
    `với số tiền ${P} sau ${t} năm gửi ngân hàng với lãi suất ${r} hàng năm thì thu được số tiền là ${A}đ `
  );
}
compoundInterest(1000000, 0.1 / 100, 12, 2);
