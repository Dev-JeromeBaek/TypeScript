/*
    ## Interface
        - optional property (?)
            - 있어도 되고 없어도 되는
*/

interface Person {
    name: string;
    age?: number;
    // age: number; age가 꼭 있어야 함.
    // age?: number; age가 꼭 없어도 됨.
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.name}`);
    // person: Person 입력 설정
    // void 출력 설정
}

// age가 ?가 아닌경우.
const p1: Person = {
    name: 'Jerome',
    age: 27
}

// age가 ? 인경우.
const p2: Person = {
    name: 'JeromeBaek'
}

hello(p1);
hello(p2);