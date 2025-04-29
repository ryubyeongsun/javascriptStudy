/**
 * Scope
 */
// ✅ 스코프(Scope)란?
// **스코프(Scope)**는 **변수에 접근할 수 있는 범위(영역)**를 의미합니다.
// 즉, 어디에서 변수를 사용할 수 있는지를 결정하는 규칙입니다.

var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

// levelOne(); //20

function levelOne() {
  var numberOne = 40;
  console.log(numberOne);
}

// levelOne(); //40

console.log(numberOne);

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`leverTwo numberTwo : ${numberTwo}`);
    console.log(`leverTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
// 모든 선언은 가장 가까운 스코프 부터 활용
console.log(numberOne);
// console.log(numberTwo);

/**
 * JS -> Lexical Scope 렉시컬 스코프
 * 인터뷰에 많이 나오니까 알아두면 좋음!
 * Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */
console.log("----!!----");
var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}
// numberThree 변수를 글로벌애서 가져옴
functionOne(); //3
//---------var let const 비교-----------
//var
var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`);

// let
i = 999;
// block level scope
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, const 키워드는 함수레벨 스코프와 블록레벨 스코프를 만들어낸다.
 */

// 🔍 함수 레벨 스코프(Function-level Scope)
// 함수 레벨 스코프는 변수나 함수가 함수 내부에서만 유효하고 함수 외부에서는 접근할 수 없는 범위를 의미합니다.
// JavaScript에서 **var**로 선언된 변수는 함수 레벨 스코프를 따릅니다.
//  즉, 변수가 선언된 함수 내에서만 해당 변수를 사용할 수 있습니다.

// ✅ 블록 레벨 스코프(Block Level Scope)란?
// 블록 {} 내부에서만 유효한 범위를 가지는 스코프를 의미합니다.
// let과 const는 블록 {} 내부에서만 접근 가능하며, 블록이 끝나면 변수는 사라집니다.

// 🔹 블록 {} 이란?
// 함수, if, for, while, {} 등에서 사용되는 중괄호 내부를 의미합니다.
// let과 const는 해당 블록 안에서만 접근할 수 있습니다.

// var: 재선언 & 재할당 가능
var a = 1;
var a = 2; // ✅ 가능 (재선언)
a = 3; // ✅ 가능 (재할당)

// let: 재선언 불가, 재할당 가능
let b = 1;
// let b = 2; // ❌ 오류 (재선언 불가)
b = 3; // ✅ 가능 (재할당)

// const: 재선언 & 재할당 불가
const c = 1;
// const c = 2; // ❌ 오류 (재선언 불가)
// c = 3;       // ❌ 오류 (재할당 불가)
