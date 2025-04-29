/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지
 *
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

console.log("-----------------");

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */

let number = 1;
number++;
console.log(number);
number--;
console.log(number);

/**
 * 연산자의 위치
 */

console.log("-----------");
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

console.log("---sample---");

let sample = "99";

console.log(+sample);
console.log(typeof +sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = "류병선";
// NaN -> Not a Number
console.log(+sample);

sample = "99";
console.log(-sample);

/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

/**
 * 비교 연산자
 *
 * 1) 값의 비교 -잘안씀
 * 2) 값과 타입의 비교 -일반적으로 씀
 */

// 1)== 두개 사용할 때 (값만 비교)
console.log(5 == 5);
console.log(5 == "5");
console.log(0 == "");
console.log(true == 1);
console.log(true == "1");
console.log("---------");
// 2)=== 세개 사용할 때 (값과 타입까지 비교)
console.log(5 === 5);
console.log(5 === "5");
console.log(0 === "");
console.log(true === 1);
console.log(true === "1");
console.log("---------");

console.log(5 != 5);

console.log("---------");

console.log(5 !== "5");
console.log("---------");
/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? "10이 0보다큼" : "10이 0보다 작음");

/**
 * 논리 연산자
 *
 * 1) &&
 * 2) ||
 */

console.log("-------");

//&& 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && false);

//|| 조건은 둘중 하나만 true여도 true를 반환
console.log("-----------");
console.log(true || true);
console.log(true || false);
console.log(false || false);

/**중요 실무사용
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log("--------");
console.log(true || "에스파");
console.log(false || "에스파");
console.log(false && "에스파");
console.log(true && "에스파");
console.log("--------");
console.log(true && true && "에스파");
console.log(true && false && "에스파");
console.log((true && false) || "에스파");

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */

let name;
console.log(name);

// ?? 왼쪽 변수가 undefined이거나 null일대 오른쪽 값을 반환해라 아니면 왼쪽값
name = name ?? "코드팩토리";
console.log(name);

name = name ?? "아이브";
console.log(name);

let name2;
name2 ??= "류병선";
console.log(name2);
