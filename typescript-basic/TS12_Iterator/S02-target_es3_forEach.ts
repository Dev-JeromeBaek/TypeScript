/*
    ## target es3 forEach

*/

const tsArray12_2 = ['first', 'second'];

// ts
tsArray12_2.forEach((item) => {
    console.log(item);
});

// js
tsArray12_2.forEach(function (item) {
    console.log(item);
});

// target 이 es3 인데도 forEach 는 트랜스파일이 되지 않았음.
// https://github.com/Microsoft/TypeScript/issues/2410
