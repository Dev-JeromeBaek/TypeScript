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

interface Person01{
    name: string;
    age?: number;
}

const person01: Person01 = {
    name: 'Jerome',
};

function hello1(p11: Person01): void {
    console.log(`안녕하세요 ${p11.name} 입니다.`);
}