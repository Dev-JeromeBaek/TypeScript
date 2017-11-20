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

interface Person8_1{
    name: string;
    age?: number;
}

const person8_1: Person8_1 = {
    name: 'Jerome',
};

function hello1(p8_11: Person8_1): void {
    console.log(`안녕하세요 ${p8_11.name} 입니다.`);
}