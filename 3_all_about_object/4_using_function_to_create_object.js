/**
 * Using function to create objects
 */
function IdolModel(name, year){
    // new안쓰면 undefined가 나옴
    if(!new.target){
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

//생성자 함수면 new를 반드시 써야됨
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// global -> 이 파일이 실행 됐을 때 자동으로 생성되는 객체 -> new 객체를 선언하지 않고 쓰면 this키워드가 global로 붙어버림! 이렇게 하지 마셈
console.log(global.name);

// new 키워드를 쓸 수 있는 함수는 일반함수만 가능 arrow함수는 X
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};
const yuJin3 = new IdolModelArrow('안유진', 2003);
