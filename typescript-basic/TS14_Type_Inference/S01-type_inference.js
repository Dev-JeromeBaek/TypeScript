/*
    ## Type Inference (타입 추론)
        - 기본적으로 타입을 명시적으로 쓰지 않을 때 추론하는 방법에 대한 규칙
            - 명시적으로 쓰는 것은 타입 추론이 아니라 코드를 읽기 좋게 하는 지름길
        - let 은 기본적으로 우리가 아는 기본 자료형으로 추론
        - const 는 리터럴 타입으로 추론
            - object 타입을 쓰지 않으면, 프로퍼티는 let 처럼 추론
                - const person = {name:'Jerome', age:27}; 이면
                - person => {name: string, age: number;} 로 추론
        - 대부분은 추론이 쉽다.
            - 단순 변수
            - structuring, destructuring
        - array, 함수의 리턴에서는 원하는데로 얻기가 힘들다.
*/ 
