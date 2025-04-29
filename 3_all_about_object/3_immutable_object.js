/**
 * Immutable Object
 */
const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin);

/**
 * Extensible
 */
console.log("---------Extensible-------------");
console.log(Object.isExtensible(yuJin));

yuJin["position"] = "vacal";
console.log(yuJin);

// 객체 확장 금지
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));
// 추가하지 못함 Extensible(false) -> 단 삭제는 가능
yuJin["groupName"] = "아이브";
console.log(yuJin);
delete yuJin["position"];
console.log(yuJin);

/**
 * Seal 봉인 -> 추가 삭제안됨 즉 에트리뷰트 프로퍼티 configurable을 false로 변경하는것괴 동일
 */
console.log("----Seal봉인 실습-----");
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
console.log("----------------");
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2["groupName"] = "이이브";
console.log(yuJin2);

delete yuJin2["name"];
console.log(yuJin2);

Object.defineProperty(yuJin2, "name", {
  value: "류병선",
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
yuJin2.name = "박형주";
console.log(yuJin2);

// 2️⃣ configurable: false와의 차이점
// 기능:                                	Object.seal(obj)	                   configurable: false
// 새로운 프로퍼티 추가:	                 ❌ 불가능	                          🔹 개별적으로 설정 가능
// 기존 프로퍼티 삭제:	                     ❌ 불가능	                          ❌ 불가능
// 기존 값 변경	                            ✅ 가능 (writable: true일 경우):	      ✅ 가능 (writable: true일 경우)
// 속성 변경 (configurable, enumerable):	❌ 불가능	                          ❌ 불가능

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 * extensible + seal 기능을 다 추가하고 나서도 writable까지 false로 만드는 기능이다. 추가삭제변경 불가능
 */
const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log("-------Freezed실습---------");
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3["groupName"] = "아이브";
console.log(yuJin3);

//!오류발생!
// Object.defineProperties(yuJin3, 'name', {
//     value: '류병선',
// })
console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));

// Object.freeze()는 객체를 완전히 불변(immutable) 하게 만드는 메서드
// 📌 특징:
// ✅ 읽기(read) 가능
// ❌ 수정(modify) 불가능
// ❌ 삭제(delete) 불가능
// ❌ 새로운 프로퍼티 추가(add) 불가능
// ❌ 속성 설명자 변경 불가능 (writable: false, configurable: false)
// 즉, 객체의 모든 속성을 변경할 수 없도록 고정

const yuJin4 = {
  name: "안유진",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); // true
// 상위 오브젝트가 freeze가 됐다고 해서 하위 오브젝트까지 freeze 되는건 아님 -> extensible seal도 마찬가지
console.log(Object.isFrozen(yuJin4["wonYoung"])); //false
console.log(Object.isFrozen(yuJin4["name"])); // true
console.log(Object.isFrozen(yuJin4["year"])); //true
