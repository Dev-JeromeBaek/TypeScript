/*
    ## 클래스 만들기
        - 1. 생성자 함수가 없으면, 디폴트 생성자가 불린다.
        - 2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만,
                값을 대입하지 않으면 undefined이다.
            => 오브젝트에 프로퍼티가 아예 존재하지 않는다.
        - 3. 접근제어자 (Access Modifier)는 public이 디폴트 이다.
*/

class Person9_1 {
    name: string;
    age: number;
}

const person11: Person9_1 = new Person9_1();
console.log(person11);    // Person {}
person11.age = 27;
console.log(person11.name);    // undefined