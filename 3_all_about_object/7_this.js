/**
 * this
 *
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에서 평가된다.
 *
 * ****중요*** 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다
 */

const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  },
};
console.log(yuJin.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}

const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }
  return dance2();
};

console.log(yuJin2.dance());

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 *
 * 1) 일반 함수 호출할땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성 했을땐 객체를 가리킨다.
 */

/**
 * 원하는 this값으로 매핑하는 법
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
console.log("-------원하는 this값으로 매핑하는 법-------");
//1)일반함수이므로 글로벌 매핑
function returnName() {
  return this.name;
}
console.log(returnName());

const yuJin3 = {
  name: "안유진",
};

console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야 한다.
 */
// ✅ 아규먼트(Argument)란?
// **아규먼트(Argument)**는 함수를 호출할 때 전달하는 값을 의미합니다.
// 📌 개념 정리:
// 매개변수(Parameter): 함수를 정의할 때 사용하는 변수
// 아규먼트(Argument): 함수를 호출할 때 실제로 전달하는 값

function multiply(x, y, z) {
  return `${this.name} / 결과값: ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5)); //x:3 y:4 z:5
console.log(multiply.apply(yuJin3, [3, 4, 5]));

/**
 * bind()
 */
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());

// 📌 call(), apply(), bind() 함수 정리
// 자바스크립트에서 call(), apply(), **bind()**는 함수의 this 값을 변경할 때 사용됩니다.
// → 즉, 어떤 객체의 메서드를 다른 객체에서 호출할 수 있도록 도와줍니다.

// ✅ 1. call()
// 📌 즉시 실행하면서 this를 변경할 때 사용
// 📌 call()의 특징
// 첫 번째 인자는 this로 사용할 객체 (person, anotherPerson)
// 이후 나오는 값들은 함수의 개별적인 아규먼트(Arguments)
// 함수가 즉시 실행됨

// ✅ 2. apply()
// 📌 즉시 실행하면서 this를 변경하지만, 아규먼트를 배열로 받음
// 📌 apply()의 특징
// call()과 동일하지만, 아규먼트를 배열([])로 전달
// 즉, call(a, 1, 2, 3) ⬌ apply(a, [1, 2, 3])

// ✅ 3. bind()
// 📌 새로운 함수 반환 (즉시 실행 X, 나중에 실행 가능)
// 📌 bind()의 특징
// this를 바꾸고 새로운 함수를 반환
// 즉시 실행하지 않고, 나중에 실행할 수 있음 (call(), apply()와 차이점)
// 반환된 함수에서 추가적인 아규먼트를 전달할 수도 있음

// ✔ bind() vs call() & apply() 차이점

// 함수	  this 변경	  아규먼트 전달 방식	        실행 여부
// call()	가능	    개별 값 (arg1, arg2, ...)	즉시 실행
// apply()	가능	    배열 ([arg1, arg2, ...])	즉시 실행
// bind()	가능	    개별 값 (arg1, arg2, ...)	❌ 즉시 실행 안 함 (새로운 함수 반환)
