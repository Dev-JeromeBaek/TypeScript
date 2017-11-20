/*
    ## Interface
        - optional property (?)
            - 있어도 되고 없어도 되는
*/

interface Person03 {
    name: string;
    age?: number;
    // age: number; age가 꼭 있어야 함.
    // age?: number; age가 꼭 없어도 됨.
}

function hello03(person: Person03): void {
    console.log(`안녕하세요! ${person.name}`);
    // person: Person 입력 설정
    // void 출력 설정
}

// age가 ?가 아닌경우.
const p31: Person03 = {
    name: 'Jerome',
    age: 27
}

// age가 ? 인경우.
const p32: Person03 = {
    name: 'JeromeBaek'
}

hello03(p31);
hello03(p32);