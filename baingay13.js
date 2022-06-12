//bai 1
function isOddNumber(x) {
  // if (x == Number) {
  if (x % 2 != 0) {
    console.log(`true`);
  }
  // }
  else console.log(`false`);
}
isOddNumber(7);
//bai 2
function maxOfTwo(a, b) {
  if (a >= b) {
    console.log(`số lớn nhất là ${a}`);
  } else console.log(`số lớn nhất là ${b}`);
}
maxOfTwo(2, 3);
maxOfTwo(2, 2);
maxOfTwo(5, 2);
//bai 3
function divisibleByThreeAndFive(y) {
  if (y % 3 == 0 && y % 5 == 0) {
    console.log(`true`);
  } else console.log(`false`);
}
divisibleByThreeAndFive(15);
divisibleByThreeAndFive(10);
divisibleByThreeAndFive(9);
//bai 4
function season(z) {
  if (z == 12 || z == 1 || z == 2) {
    console.log(`winter`);
  } else if (z == 3 || z == 4 || z == 5) {
    console.log(`spring`);
  } else if (z == 6 || z == 7 || z == 8) {
    console.log(`Summer`);
  } else if (z == 9 || z == 10 || z == 11) {
    console.log(`Fall`);
  }
}
season(12);
season(4);
season(11);
season(6);
// bai 5
function trafficLight(c) {
  if (c == `red`) {
    console.log(`phóng hết ga`);
  } else if (c == `yellow`) {
    console.log(`đi nhanh hơn `);
  } else if (c == `green`) {
    console.log(`đi bình thường `);
  } else console.log(`tuỳ hứng`);
}
trafficLight(`green`);
trafficLight(`yellow`);
trafficLight(`red`);
trafficLight(`blank`);
//bai 6
function calcCommissions(v) {
  if (v < 100) {
    const n = (v * 5) / 100;
    console.log(
      `với tổng doang thu là ${v}triệu thì số tiền hoa hồng là ${n}triệu`
    );
  } else if (v >= 100 && v < 300) {
    const n = (v * 10) / 100;
    console.log(
      `với tổng doang thu là ${v}triệu thì số tiền hoa hồng là ${n}triệu`
    );
  } else {
    const n = (v * 20) / 100;
    console.log(
      `với tổng doang thu là ${v}triệu thì số tiền hoa hồng là ${n}triệu`
    );
  }
}
calcCommissions(10);
calcCommissions(110);
calcCommissions(310);
// level 2
// bai 1
function isLeafYear(u) {
  let number = u / 100;
  if (Math.ceil(number) == Math.floor(number) && u % 400 == 0) {
    console.log(`${u} là năm nhuận`);
  } else if (Math.ceil(number) == Math.floor(number) && u % 400 != 0) {
    console.log(`${u} không phải năm nhuận`);
  } else if (u % 4 == 0) {
    console.log(`${u} là năm nhuận`);
  } else console.log(`${u} không phải năm nhuận`);
}
isLeafYear(1600);
isLeafYear(1700);
isLeafYear(500);
// bài 2
function daysOfMonth(month) {
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    console.log(`tháng ${month} có 31 ngày`);
  } else if (month == 6 || month == 4 || month == 9 || month == 11) {
    console.log(`tháng ${month} có 30 ngày`);
  } else if (month == 2) {
    console.log(
      `tháng ${month} có 29 ngày nếu là năm nhuận, nếu không là 28 ngày`
    );
  }
}
daysOfMonth(1);
daysOfMonth(2);
daysOfMonth(4);
//bai 3
function calcGrade(point) {
  if (point < 4) {
    console.log(` loại F`);
  } else if (point < 5.5) {
    console.log(` loại D`);
  } else if (point < 7.0) {
    console.log(` loại C`);
  } else if (point < 8.5) {
    console.log(` loại B`);
  } else console.log(` loại A`);
}
calcGrade(1);
calcGrade(5);
calcGrade(8);
calcGrade(10);

//bai 4
function calcTaxiFee(km) {
  if (km == 0) {
    let B = 10000;
    console.log(`gọi mà không đi phạt ${B}đ`);
  } else if (km <= 30) {
    let B = 10000 + km * 11000;
    console.log(`sau khi đi ${km}km thì mất số tiền là ${B}đ`);
  } else if (km > 30) {
    let B = 10000 + km * 11000;
    console.log(`sau khi đi ${km}km thì mất số tiền là ${B}đ`);
  }
}
calcTaxiFee(5);
calcTaxiFee(40);
calcTaxiFee(0);
//bai 5
function findMaxOfThree(a, b, c) {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  console.log(max);
}

findMaxOfThree(1, 2, 3);
findMaxOfThree(3, 2, 1);
findMaxOfThree(2, 3, 1);
findMaxOfThree(3, 3, 2);
findMaxOfThree(4, 4, 4);

//bai 6
function solveEquation(j, k, l) {
  let x1;
  let x2;
  let delta = k ** 2 - 4 * j * l;
  if (j == 0 && k == 0) {
    console.log(`Phương trình vô nghiệm`);
  } else if (j == 0) {
    let h = -l / k;
    console.log(`phương trình có một nghiệm ${h}`);
  } else if (delta < 0) {
    console.log(`phương trình vô nghiệm`);
  } else if (delta == 0) {
    x1 = x2 = (-k / 2) * j * l;
    console.log(` phương trình có nghiệm kép x1 = x2 = ${x1}`);
  } else if (delta > 0) {
    x1 = ((-k + Math.sqrt(delta)) / 2) * j;
    x2 = ((-k - Math.sqrt(delta)) / 2) * j;
    console.log(` phương trình có 2 nghiệm [${x1},${x2}]`);
  }
}
solveEquation(0, 0, 1);
solveEquation(0, 2, 3);
solveEquation(1, 4, 1);
