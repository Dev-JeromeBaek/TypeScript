/*
    ## 클래스와 프로퍼티
        - 1. 클래스의 프로퍼티를 선언과 동시에 값을 할당하는 방법도 있다.
        - 2. 생성자가 불리기 전에 이미 프로퍼티의 값이 저장되어 있음을 알 수 있다.
*/
// 1
class Person9_2 {
    constructor() {
        this.name = null;
        this.age = null;
        console.log(this.name === null); // false
        console.log(this.name === undefined); // true
    }
}
const person9_2 = new Person9_2();
person9_2.name = 'Jerome';
person9_2.age = 27;
console.log(person9_2); // Person9_21 { name: 'Jeromne', age: 27}
// 2
class Person9_22 {
    constructor() {
        this.name = 'Jerome';
        this.age = 27;
        console.log(this.name); // 'Jerome'
    }
}
const person9_22 = new Person9_22();
console.log(person9_22); // Person9_22 {name: 'Jerome', age: 27}
