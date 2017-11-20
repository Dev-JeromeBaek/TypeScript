/*
    ## Aliasing Tuple
        - 1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
*/

let person7_51: [string, number] = ['Jerome', 27];

type PersonTuple7_5 = [string, number];

let another: PersonTuple7_5 = ['Baek', 26];