/*
    ## 클래스 만들기
        - 1. 생성자 함수가 없으면, 디폴트 생성자가 불린다.
        - 2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만,
                값을 대입하지 않으면 undefined이다.
            => 오브젝트에 프로퍼티가 아예 존재하지 않는다.
        - 3. 접근제어자 (Access Modifier)는 public이 디폴트 이다.
*/

// 1
class Person9_11 {
    name: string;
    age: number;
}

const person9_11: Person9_11 = new Person9_11();
console.log(person9_11);    // Person9_1 {}
person9_11.age = 27;
console.log(person9_11.name);    // undefined

// 2
class Person9_12 {
    name: string;
    age: number;
}

const person9_12 = new Person9_12();

person9_12.name = 'Jerome';
person9_12.age = 27;

// 3
class Person9_13 {
    name: string;
    age: number;

    constructor(name: string) {
        this.name = name;
    }
}
const person9_13 = new Person9_13('Jerome');

person9_13.age = 27;