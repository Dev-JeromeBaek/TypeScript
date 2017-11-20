/*
    ## Interface
        - interface extends interface

*/

interface Person07 {
    name: string;
    age?: number;
}

interface Korean07 extends Person07 {
    city: string;
}

const k71: Korean07 = {
    name: 'JeromaBaek',
    city: 'Seoul'
}