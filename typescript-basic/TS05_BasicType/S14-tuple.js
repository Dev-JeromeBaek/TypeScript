/*
    ## Tuple
        - 배열인데 타입이 한가지가 아닌 경우.
        - 배열과 마찬가지로 객체.
        - 꺼내 사용할 때 주의가 필요.
*/
// Declare a typle type
let x5_141;
// Initialize it
x5_141 = ["hello", 10]; // OK
// Initialize it incorrectly
x5_141 = [10, "hello"]; // Error
x5_141[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x5_141[5].toString()); // OK, 'string' and 'number' both have 'toString'
x5_141[6] = true; // Error, 'boolean' isn't 'string | number'
