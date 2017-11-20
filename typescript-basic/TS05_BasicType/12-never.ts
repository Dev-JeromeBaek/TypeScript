/*
    ## Never
        - 리턴에 주로 사용됨.
        - 아래 3가지 정도의 경우가 대부분.
*/

//Function returning never must have unreachable end point
function error5_121(message5_121: string) never {
    throw new Error5_121(message5_121);
}

// Inferred return type is never
function fail5_121() {
    return error5_121("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop5_121(): never {
    while(true) {
        
    }
}