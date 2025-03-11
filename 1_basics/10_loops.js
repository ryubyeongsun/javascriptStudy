/**
 * Loops
 *
 * 1)for
 * 2)while
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i,j);
  }
}

// 정사각형의 크기
const size = 6;

for (let i = 1; i <= size; i++) {
  let row = "";
  if (i === 1 || i === size) {
    // 첫 번째 줄과 마지막 줄: 별 6개
    row = "*".repeat(size);
  } else {
    // 중간 줄: 첫 번째와 마지막만 별, 나머지는 공백
    row = "*" + " ".repeat(size - 2) + "*";
  }
  console.log(row);
}

let aaa = "";
for (let i = 1; i <= 6; i++) {
  if (i === 1 || i === 6) {
    for (let j = 0; j < 6; j++) {
      aaa += "*";
    }
  } else {
    aaa += "*    *";
  }
  aaa += "\n";
}
console.log(aaa);

let bbb = "";

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    bbb += "*";
  }
  bbb += "\n";
}
console.log(bbb);

/**
 * for...in
 *
 * 키값
 * 배열에서 인덱스값받음
 */
const bs = {
  name: "류병선",
  year: "2000",
};

for (let k in bs) {
  console.log(k);
}
console.log("------------");
const byeongsunFamliy = [
  "류병선",
  "류경식",
  "류지연",
  "류지수",
  "류지민",
  "심경자",
];

for (let key in byeongsunFamliy) {
  console.log(key);
  console.log(byeongsunFamliy[key]);
  // console.log(`${key}:${byeongsunFamliy[key]}`);
}

/**
 * for...of
 * 리스트(배열) - 값을 가쟈옴
 */
console.log("------------");

for (let value of byeongsunFamliy) {
  console.log(value);
}

/**
 * While
 */

let number = 0;

while (number < 10) {
  number++;
}
console.log(number);

/**
 * do...while
 * 먼저 코드실행을 하고(바디실행) 조건이 맞는지 확인
 * 잘안씀
 */

number = 0;

do {
  number++;
} while (number < 10);

console.log(number);

/**
 * break
 */
console.log("------break-------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("-------------");
number = 0;
while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number);
}

/**
 * continue
 */

console.log("------continue-------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("-------------sdsds");

number = 0;
while (number < 10) {
  number++;
  if (number === 5) {
    continue;
  }

  console.log(number);
}
