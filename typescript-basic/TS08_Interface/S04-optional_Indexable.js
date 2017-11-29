/*
    ## Interface
        - optional property(indexable type_
            - Array의 느낌과 Dictionary의 느낌.
            - indexable type은 2가지의 타입만 설정 가능.
            - String | Number
*/
const person8_41 = {};
person8_41[0] = 'hi';
person8_41[100] = 'hello';
const person8_42 = {
    name: 'Jerome'
};
person8_42.anybody = "Baek";
// anybody == index
person8_42.anybody2 = "SeungYeob";
function hello8_4(inPerson) {
    console.log(`안녕하세요 ${inPerson.name} 입니다.`);
    // inPerson: Person 입력 설정.
    // void 출력 설정
}
hello8_4(person8_42);
