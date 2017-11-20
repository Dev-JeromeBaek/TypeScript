/*
    ## Type Alias와 Interface의 차이(1)
        - 1. type alias는 object literal type 으로
        - 2. interface는 interface로
*/

type Alias7_6 = { num: number }

interface Interface7_6 {
    num: number;
}

declare function aliased7_6(arg: Alias7_6): Alias7_6;
declare function Interface7_6(arg: Interface7_6): Interface7_6;