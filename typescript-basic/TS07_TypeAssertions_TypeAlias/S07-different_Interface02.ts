/*
    ## Type Alias와 Interface의 차이(2)
        - 1. 당연한건 type alias끼리는 extends, implements 불가.
        - 2. interface extends type alias 가능.
        - 3. class implements type alias 가능.
        - 4. class extends type alias 불가 (interface도 마찬가지)
        - 5. 마치 interface 처럼 동작한다.
*/

type PersonAlias7_7 = {
    name: string;
    age: number;
};

interface Iperson7_7 extends PersonAlias7_7 {

}

let ip7_71: Iperson7_7 = {
    name: 'Jerome',
    age: 27
};

class PersonImpl7_7 implements PersonAlias7_7 {
    name: string;
    age: number;

    hello() {
        console.log('안녕하세요');
    }
}

let pi7_72: PersonImpl7_7 = new PersonImpl7_7();
pi7_72.hello();

class PersonChild7_7 extends PersonAlias7_7 {
    
}