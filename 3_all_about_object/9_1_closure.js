/**
 * Closure
 *
 * A closure is the combination of a function and the lexical
 * environemnt within which that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다."
 */
// 클로저(Closure)는 자바스크립트에서 중요한 개념으로, 함수와 그 함수가 선언된 렉시컬 환경(lexical environment) 간의 관계를 말합니다.
// 클로저는 함수가 선언될 때의 환경을 기억하고, 그 환경에 접근할 수 있는 특성을 가집니다.
function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }
  return innerGetNumber();
}

// console.log(number); 오류남!!
// console.log(getNumber());

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber();
console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
//cacheFunction에서 number라는 변수를 선언했지만 innerCacheFunction에서 그 값에 접근할 수 있습니다.
// 클로저 덕분에 innerCacheFunction은 cacheFunction의 실행이 끝난 후에도 number 값을 기억하고 사용할 수 있습니다. 렉시컬 환경 덕분!
function cacheFunction() {
  var number = 10 * 10; // 만약 이 계산이 매우 오래 걸린다는 가정을 했을 때!

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }
  return innerCacheFunction;
}
//클로저를 사용하면 함수가 실행된 후에도 상태(state)를 기억할 수 있습니다.
// 예를 들어, runner2를 여러 번 호출하면서도 number 변수의 값은 변경되지 않고 유지되며, innerCacheFunction은 이전 호출에서 기억한 값을 기반으로 계산을 합니다.
// 성능 최적화됨!!
const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

/**
 * 2) 데이터 캐싱
 */

function cacheFunction2() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }
  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 * JS는 private 가 생긴지 오래되지 않음 -> #
 * private가 없을땐 어떻게 했을까?
 */
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year); //undefined
