/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    
    sayHello(){
        return `안녕하세요 ${this.name} 입니다.`
    }
}

class FemaleIdoModel extends IdolModel{
    // 노래 / 춤
    part;

    constructor(name, year, part){
        //JS에서는 constructor 가 아닌 곳에서 super가아니라 this를 사용해야됨 단 함수는 가능.
        super(name, year);
        this.part = part;

    }

    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdoModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());