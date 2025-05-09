/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                     설정할 때 호출되는 함수로 구성된 프로퍼티
 *                     예를들면 getter와 setter
 */

const yujin = {
  name: "안유진",
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yujin, "name"));
/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yujin, "year"));
console.log(Object.getOwnPropertyDescriptors(yujin));

const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);
// 엑세서 프로퍼티는 value가 존재하지 않음
console.log(Object.getOwnPropertyDescriptor(yuJin2, "age"));

yuJin2["height"] = 172;
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
  value: 172,
  // 밑에 주석처리 해버리면 default 값으로 false가 들어감
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

yuJin2.height = 180;
console.log(yuJin2);
/**
 * writable 실습
 */
console.log("----writable실습----");
Object.defineProperty(yuJin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

console.log("-------------------");
yuJin2.height = 172;
console.log(yuJin2);

/**
 * Enumerable 실습
 */
console.log("----Enumerable실습----");
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}

Object.defineProperty(yuJin2, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

console.log("--------------");
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable 실습
 */
console.log("----Configurable실습----");
Object.defineProperty(yuJin2, "height", {
  // configurable을 false로 변경할 때 동시에는 변경가능
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

//!오류발생!!
// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false
// });

Object.defineProperty(yuJin2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
  writable: true,
});

// configurable 을 false로 바꾸면 프로퍼티 에트리뷰트는 변경 불가능하지만
// 예외가 있음
// writable 이 true 일때는 value 값은 변경 가능
// wiratble이 true일때 false로도 변경 가능 -> false에서 true는 안됨
// *주의 한 번 configurable: false가 되면 다시 true로 변경할 수 없음. 삭제(delete obj.prop)도 불가능.
// *값을 변경하고 싶다면 새로운 객체를 만들어야 함.
