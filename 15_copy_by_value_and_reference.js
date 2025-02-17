/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive(object,function ,array)등을 빼고 모든 다른 데이터 타입 값은 copy by value 이다.
 * 2) 객체는 copy by reference다
 */

let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

clone += " 안유진 입니다.";
console.log("------------");
console.log(original);
console.log(clone);

let originalObj = {
  name: "안유진",
  group: "아이브",
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log("------------");

originalObj["group"] = "코드팩토리";
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj2 = {
  name: "류병선",
  group: "서석고",
};

cloneObj2 = {
  name: "류병선",
  group: "서석고",
};
console.log("------------");
// 오브젝트는 안에 값이 같다고 해도 true가 나오지 않음 copy by reference
console.log(originalObj2 === cloneObj2);

const yuJin1 = {
  name: "안유진",
  group: "아이브",
};

const yuJin2 = yuJin1;
const yuJin3 = {
  name: "안유진",
  group: "아이브",
};

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator
 */

const yuJin4 = {
  ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3);

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin5);

// 순서 중요성  yuJin3에 이미 name이 선언됐기 때문에 덮어씌워짐
const yuJin6 = {
  name: "류병선",
  ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
  ...yuJin3,
  name: "류병선",
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [10, ...numbers];
console.log(numbers2);
