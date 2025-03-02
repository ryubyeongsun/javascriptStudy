/**
 * Async / Await
 */
// 4️⃣ Async/Await (더 간결한 비동기 코드)
// 👉 Promise의 .then()을 대체하는 문법
// 👉 async 함수 내에서 await을 사용하면 비동기 작업을 동기 코드처럼 작성 가능
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('에러');
    }, seconds * 1000);
  });

  //await는 promise로 만든 함수만 쓸 수 있다!
async function runner() {
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }catch(e){
        console.log(e);
    }finally{
        console.log('---finally---');
    }

}
runner();
console.log("실행 끝");

// 🎯 정리
// 구분	        설명	                                                            단점
// Callback	    함수의 인자로 전달되어 특정 작업이 끝난 후 실행되는 함수	        콜백 지옥 발생 가능
// Promise	        비동기 작업을 객체로 관리하여 .then(), .catch()로 처리	            .then() 체이닝이 길어지면 가독성이 떨어질 수 있음
// Async/Await	    Promise를 좀 더 가독성 좋게 작성하는 방법	                         await을 남발하면 병렬 실행이 어려울 수도 있음
