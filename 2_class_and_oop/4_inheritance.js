/**
 * Inheritance
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdoModel extends IdolModel{
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdoModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIdoModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdoModel('지민', 1998);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);
console.log(jiMin.sing());
console.log(jiMin.year);

const cf = new IdolModel('류병선', 2000);
console.log(cf);
console.log(cf.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdoModel);
console.log(yuJin instanceof MaleIdoModel);

console.log('------------');

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdoModel);
console.log(jiMin instanceof MaleIdoModel);

console.log('------------');

console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdoModel);
console.log(cf instanceof MaleIdoModel);