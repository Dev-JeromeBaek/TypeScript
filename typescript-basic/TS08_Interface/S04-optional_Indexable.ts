/*
    ## Interface
        - optional property(indexable type_
            - Array의 느낌과 Dictionary의 느낌.
            - indexable type은 2가지의 타입만 설정 가능.
            - String | Number
*/

// 1 Array
interface Person1 {
    [index: number]: string;
}

const person1: Person1 = {};
person1[0] = 'hi';
person1[100] = 'hello';

// 2 Dictionary
interface Person2 {
    name: string;
    [index: string]: string;
}

const person2: Person2 {
    name: 'Jerome'
}

person2.anybody = "Baek";
// anybody == index
person2.anybody2 = "SeungYeob";

function hello(inPerson: Person2): void {
    console.log(`안녕하세요 ${inPerson.name} 입니다.`);
    // inPerson: Person 입력 설정.
    // void 출력 설정
}

hello(person2);