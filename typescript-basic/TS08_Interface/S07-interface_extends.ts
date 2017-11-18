/*
    ## Interface
        - interface extends interface

*/

interface Person7 {
    name: string;
    age?: number;
}

interface Korean7 extends Person7 {
    city: string;
}

const k7: Korean7 = {
    name: 'JeromaBaek',
    city: 'Seoul'
}