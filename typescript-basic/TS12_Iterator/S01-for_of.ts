/*
    ## for..of
        - 어떤 배열을 돌때, 그동안 배열을 사용할 때 javascript의 문법이
            for문을 많이 사용했지만 es5부터 forEach를 많이 사용했음.
            하지만 forEach의 단점은 return으로 순회를 탈출할 수 없다는 문제가 있고,
            es6에 나온 for of라는 것이 나온것.
            (for of는 원칙적으로 배열에서만 사용 가능.)
        
        - es3
            - for (var i=0; i<array.length; i++)
        - es5
            - array.forEach
        - es6
            - for (const item of array)

    @@@ 참고 @@@
    - for..in
        - 배열을 순회할 때는 사용하지 않을 것.
            - index가 number가 아니라 string으로 나온다.
            - 배열의 프로퍼티를 순회할 수도 있다.
            - prototype 체인의 프로퍼티를 순회할 수도 있다.
            - 루프가 무작위로 순회할 수도 있다.
            - for..of를 쓸 것.
        - 객체를 순회할 때 사용하는데, for..of로도 많이 사용함.
            - for (const prop of Object.key(obj))도 사용할 수 있다.
*/

// Example

const array12_1 = ['first', 'second'];
const obj12_1 = {
    name: 'Jerome',
    age: 27
};

// 배열에 for..of 이용
for (const item of array12_1) {
    console.log(typeof item + ', ' + item);
}
// 출력 결과 
/*
    string, first
    string, second
*/

// 배열에 for.in 이용
// item 이 string 타입의 숫자
for (const item in array12_1) {
    console.log(typeof item + ', ' + item)
}
// 출력 결과 
/*
    string, 0
    string, 1
*/

// 객체에 for..of 이용 => 오류
/*
for (const item of tsObj12_1) {
    console.log(typeof item + ', ' + item);
}
*/

// 객체에 for.in 이용
for (const item in obj12_1) {
    console.log(typeof item + ', ' + item);
}
// 출력 결과 
/*
    string, name
    string, age
*/

/*
const array = ['first', 'second'];
const obj = {
    name: 'Jerome',
    age: 27
};

// 배열에 for..of 이용
for (const item of array) {
    console.log(typeof item + ', ' + item);
}

// 배열에 for.in 이용
// item 이 string 타입의 숫자
for (const item in array) {
    console.log(typeof item + ', ' + item)
}


// 객체에 for..of 이용 => 오류
*
* for (const item of obj) {
*     console.log(typeof item + ', ' + item);
* }


// 객체에 for.in 이용
for (const item in obj) {
    console.log(typeof item + ', ' + item);
}
*/