/*
    ## Interface
        - basic
*/
function hello8_21(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p8_22 = {
    name: 'Jerome',
    age: 27
};
hello8_21(p8_22); // 안녕하세요! Jerome 입니다.
function hello8_22(person) {
    console.log(`안녕하세요! ${person.iName} 입니다.`);
}
const iP8_22 = {
    iName: 'Jerome',
    iAge: 27
};
hello8_22(iP8_22);
