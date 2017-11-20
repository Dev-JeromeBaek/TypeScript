/*
    ## Interface
        - optional property(indexable type_
            - Array의 느낌과 Dictionary의 느낌.
            - indexable type은 2가지의 타입만 설정 가능.
            - String | Number
*/

// 1 Array
interface Person041 {
    [index: number]: string;
}

const person41: Person041 = {};
person41[0] = 'hi';
person41[100] = 'hello';

// 2 Dictionary
interface Person042 {
    name: string;
    [index: string]: string;
}

const person42: Person042 = {
    name: 'Jerome'
};

person42.anybody = "Baek";
// anybody == index
person42.anybody2 = "SeungYeob";

function hello04(inPerson: Person042): void {
    console.log(`안녕하세요 ${inPerson.name} 입니다.`);
    // inPerson: Person 입력 설정.
    // void 출력 설정
}

hello04(person42);