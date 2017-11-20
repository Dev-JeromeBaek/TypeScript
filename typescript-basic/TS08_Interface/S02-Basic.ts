/*
    ## Interface
        - basic
*/

function hello8_21(person: { name: string; age: number; }): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p8_22: { name: string; age: number; } = {
    name: 'Jerome',
    age: 27
}

hello8_21(p8_22);    // 안녕하세요! Jerome 입니다.

//////////////////////////////////////////////////////////////////

interface Person8_2 {
    iName: string;
    iAge: number;
}

function hello8_22(person: Person8_2): void {
    console.log(`안녕하세요! ${person.iName} 입니다.`);
}

const iP8_22: Person8_2 = {
    iName: 'Jerome',
    iAge: 27
}
hello8_22(iP8_22);