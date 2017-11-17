/*
    ## Interface
        - basic
*/

function hello(person: { name: string; age: number; }): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p: { name: string; age: number; } = {
    name: 'Jerome',
    age: 27
}

hello(p);    // 안녕하세요! Jerome 입니다.

//////////////////////////////////////////////////////////////////

interface Person {
    iName: string;
    iAge: number;
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.iName} 입니다.`);
}

const iP: Person = {
    iName: 'Jerome',
    iAge: 27
}
hello(iP);