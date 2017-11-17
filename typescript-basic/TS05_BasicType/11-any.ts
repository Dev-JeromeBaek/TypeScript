/*
    ## Any
        - 어떤 타입이어도 상관없는 타입.
        - Any를 최대한 쓰지 않는 것이 핵심(타입스크립트를 잘 사용하는 것).
            이유인 즉슨, 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문.
            그래서 컴파일 옵션 중에는 any를 쓰면 오류를 뱉도록 하는 옵션도 있음.
            - nolmplicitAny
*/

function returnAny(message): any {
    console.log(message);
}

returnAny('리턴은 아무거나');