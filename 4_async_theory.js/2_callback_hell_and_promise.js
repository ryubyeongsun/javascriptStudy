/**
 * Callback
 */
// 1️⃣ Callback (콜백) 함수란?
// 👉 콜백 함수란, 다른 함수의 인자로 전달되어 특정 작업이 끝난 후 실행되는 함수입니다.
// 👉 비동기(Asynchronous) 작업을 처리할 때 자주 사용됩니다.

// 예를 들어, setTimeout()이나 이벤트 핸들러에서 콜백을 사용합니다.
function waitAndRun() {
  setTimeout(() => {
    console.log("끝");
  }, 2000);
}
// waitAndRun();

// callback hell!!!! 코드 읽기 힘듦
// ⚠️ 콜백의 단점: Callback Hell
// 콜백을 중첩해서 사용할 경우 코드의 가독성이 떨어지고 유지보수가 어려워집니다.
function waitAndRun2() {
  setTimeout(() => {
    console.log("1번 콜백 끝");

    setTimeout(() => {
      console.log("2번 콜백 끝");
      setTimeout(() => {
        console.log("3번 콜백 끝");
      }, 2000);
    }, 2000);
  }, 2000);
}
// waitAndRun2();

/**
 * Promise
 */
// 2️⃣ Promise란?
// 👉 비동기 작업을 처리할 때, 콜백보다 가독성이 좋은 방법입니다.
// 👉 Promise는 **"미래에 결과를 약속하는 객체"**이며, 3가지 상태를 가집니다.

// Pending (대기) → 실행 중
// Fulfilled (성공) → resolve() 호출됨
// Rejected (실패) → reject() 호출됨
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("완료");
  }, 2000);
});

// timeoutPromise.then((res) => {
//   console.log("----then----");
//   console.log(res);
// });

//resolve
// const getPromise = (seconds) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("완료");
//     }, seconds * 1000);
//   });

// getPromise(3)
//   .then((res) => {
//     console.log("--- first then ---");
//     console.log(res);

//     return getPromise(3);
//   })
//   .then((res) => {
//     console.log("--- second then ---");
//     console.log(res);

//     return getPromise(4);
//   }).then((res) => {
//     console.log("--- third then ---");
//     console.log(res);
//   });

//reject
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // if(xxx){
      //     resolve('성공');
      // }else{
      //     reject('실패');
      // }
      resolve("완료");
    }, seconds * 1000);
  });

// getPromise(3)
//   .then((res) => {
//     console.log("--- first then ---");
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("---- first catch ----");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("--- finally ---");
//   });

// 3️⃣ Promise 관련 API
// ✅ Promise.all() → 여러 개의 Promise를 병렬 실행
//⚠️ 하나라도 실패하면 전체가 실패합니다.
//tip promise->비동기
Promise.all([getPromise(1), getPromise(2), getPromise(1)]).then((res) => {
  console.log(res);
});

// ✅ Promise.allSettled() → 모든 Promise가 끝난 후 각각의 결과를 반환 (성공/실패 여부 확인 가능)
// Promise.allSettled([getPromise(1), getPromise(2), getPromise(3)]).then((res) => {
//     console.log(res);
//   });

// ✅ Promise.race() → 여러 개 중에서 가장 먼저 끝난 Promise 결과를 반환
// Promise.race([step1(), step2(), step3()]).then((result) => {
//     console.log("가장 먼저 끝난 작업:", result);
//   });
