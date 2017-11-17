/*
    ## Interface
        - basic
        - optional property
            - ? : 있어도 되고 없어도 되는
            - indexable type
        - function in interface
        - class implements interface
        - interface extends interface
        - function interface
        - string Or numner (indexable type)
        - string index = optional property
*/


interface Person{
    name: string;
    age?: number;
}

const person: Person = {
    name: 'Jerome',
};

function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name} 입니다.`);
}