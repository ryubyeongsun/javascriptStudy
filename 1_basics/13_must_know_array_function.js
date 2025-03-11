/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

//push()
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);
console.log('--------------pop');
//pop()
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('--------------shift');
//shift() 
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() => push와 같은데 첫번째에 넣음
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('--------------splice');
//splice(a,b)  a인덱스부터 b개 삭제  
console.log(iveMembers.splice(0,3));
console.log(iveMembers);
console.log('--------------');
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);

// concat( ) -> push와 다르게 배열에 적용되진 않고 새로운 배열 불러옴
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

// slice() -> splice와 다르게 배열에 적용x
console.log('---------slice--------');
console.log(iveMembers.slice(0,3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [
    ...iveMembers,
];

console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];

console.log(iveMembers3);

console.log('--------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

// spread operator 메모리 공간이 아예 다름 false나옴
console.log([
    ...iveMembers,
] === iveMembers); 

// join() -> 모든값들을 string으로 엮을때 많이 사용
console.log(iveMembers.join());
console.log(typeof iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,                   
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a>b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a,b)=> a>b ?-1 : 1);
console.log(numbers);

// map() => 원래 배열을 변경x 새로운 배열을 만듦
console.log('-------map-------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x)=>{
    if(x==='안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));

console.log(iveMembers);

// filter() => true를 반환하면 헤당 값을 keep false를 반환하면 keep하지 않음, 순서대로 다찾음
numbers = [1,8,7,6,3];

console.log(numbers.filter((x) => x % 2 === 0));

//find() =>filter와 비슷하지만 해당되는 첫번째 값만 찾음
console.log(numbers.find((x) => x % 2 === 0));

//findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() => key노트 참고
console.log(numbers.reduce((p,n) => p + n ,0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string 의 길이는 .length를 이용해서 구할 수 있다.

console.log(iveMembers.reduce((p,n) => p + n.length, 0));
