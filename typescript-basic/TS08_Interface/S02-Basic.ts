/*
    ## Interface
        - basic
*/

function hello21(person: { name: string; age: number; }): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p22: { name: string; age: number; } = {
    name: 'Jerome',
    age: 27
}

hello21(p22);    // 안녕하세요! Jerome 입니다.

//////////////////////////////////////////////////////////////////

interface Person02 {
    iName: string;
    iAge: number;
}

function hello22(person: Person02): void {
    console.log(`안녕하세요! ${person.iName} 입니다.`);
}

const iP22: Person02 = {
    iName: 'Jerome',
    iAge: 27
}
hello22(iP22);