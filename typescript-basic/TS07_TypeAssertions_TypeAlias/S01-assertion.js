/*
    ## Type assertion ( 타입 어설션 )
        - 적당한 번역을 찾을 수가 없다.
            - Type assertions
        - 형변환과는 다르다.
            - 형변환은 실제 데이터 구조를 바꿔준다.
        - '타입이 이것이다' 라고 컴파일러에게 알려주는 것을 의미한다.
            - 그래서 행동에 대해서 작성자가 100% 신뢰하는 것이 중요.
        - 문법적으로는 두가지 방법이 있음.
            - 변수 as 강제 할 타입
            - <강제 할 타입>변수
        - 1. 주로 넓은 타입에서 좁은 타입으로 강제하는 경우가 많음.
        - 2. jsx에서는 as를 쓴다.
*/
// sample code
let someValue7_1 = "this is a string";
let strLength7_1 = someValue7_1.length;
let strLength7_2 = someValue7_1.length;
