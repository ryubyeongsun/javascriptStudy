/**
 * Async theory
 */

// sync programming 동기
// 동기는 순차적으로 실행됨  -> 하고있는게 없어도 대기함
// function longWork(){
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     // 2초 동안 하고 싶은 작업으로 가정
//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');

function longWork() {
  setTimeout(() => {
    console.log('완료');
  }, 2000); //2초 동안 기다렸다가 함수 실행 , setTimeout은 비동기로 실행되는 함수임.

}

console.log('Hello');
longWork();
console.log('World');
