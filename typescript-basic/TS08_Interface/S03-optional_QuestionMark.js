/*
    ## Interface
        - optional property (?)
            - 있어도 되고 없어도 되는
*/
function hello8_3(person) {
    console.log(`안녕하세요! ${person.name}`);
    // person: Person 입력 설정
    // void 출력 설정
}
// age가 ?가 아닌경우.
const p8_31 = {
    name: 'Jerome',
    age: 27
};
// age가 ? 인경우.
const p8_32 = {
    name: 'JeromeBaek'
};
hello8_3(p8_31);
hello8_3(p8_32);
