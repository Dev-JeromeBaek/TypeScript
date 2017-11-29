/*
    ## Array Type Inference (배열 타입 추론)
*/

const array14_21 = [];
const array14_22 = ['a', 'b', 'c'];
const array14_23 = ['a', 1, false];

class Animal14_2 {
    name: string;
}

class Dog14_2 extends Animal14_2 {
    dog: string;
}

class Cat14_2 extends Animal14_2 {
    cat: string;
}

const array14_24 = [new Dog14_2(), new Cat14_2()];