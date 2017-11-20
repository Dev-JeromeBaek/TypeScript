/*
    ## Interface
        - interface extends interface

*/

interface Person8_7 {
    name: string;
    age?: number;
}

interface Korean8_7 extends Person8_7 {
    city: string;
}

const k8_71: Korean8_7 = {
    name: 'JeromaBaek',
    city: 'Seoul'
}