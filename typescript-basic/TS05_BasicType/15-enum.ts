/*
    ## Enum
        - c에서 보던것과 같음.
        - 아래 예제만 이해하면 사용 준비 끝.
*/

enum Color5_151 {Red, Green, Blue}
let c5_151: Color5_151 = Color5_151.Green;

enum Color5_152 {Red = 1, Green, Blue}
let c5_152: Color5_152 = Color5_152.Green;

enum Color5_153 {Red = 1, Green = 2, Blue = 4}
let c5_153: Color5_153 = Color5_153.Green;

enum Color5_154 {Red = 1, Green, Blue}
let colorName5_151: string = Color5_154[2];