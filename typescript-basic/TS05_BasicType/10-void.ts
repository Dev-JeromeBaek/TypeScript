/*
    ## Void
        - 타입이 없는 상태.
        - `any`와 반대의 의미를 가짐.
        - 대문자 Void(X), 소문자 void(O)
        - 주로 함수의 리턴이 없을 때 사용.
            그 외에는 사용할 일이 거의 없음.
        - 타입을 명시하지 않으면 기본적으로 void 타입이 적용된다.
*/

// 타입을 명시하지 않은 경우.
function returnNoVoid(message) {
    console.log(message)
}

// 타입을 명시해준 경우.
function returnVoid(message): void {
    console.log(message);
}

returnNoVoid('리턴이 없다.');
returnVoid('리턴이 없다.');