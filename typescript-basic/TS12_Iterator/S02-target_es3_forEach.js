/*
    ## target es3 forEach
        - es3의 커버를 어디까지 해야 하나의 문제에 대해 한번쯤 생각해보면 좋을 듯.
        - es3에 특화된 라이브러리가 없다고 한다.
            그래서 es3를 타겟팅 해서 transpile할때에도
            es5 기준으로 함수를 적용한다.(함수들만)
            즉, 찾아보고 없으면 es3로 만들어줘야한다는 의미.
            예를들면 forEach가 없으면 forEach에 관련된
            것을 만들어줘야 하는데, forEach라는 함수가 있다고
            판단을 하는 것이 es5의 lib를 보기때문에
            문제가 된다고 해서 몇몇 개발자들은 이를 이상하게 여서
            typescript 이슈에 등록하여 오류 메시지를 뱉으라고 말하고 있음.
            추후에 업데이트가 된다면 모르겠지만 아직은 그런 오류 메시지는
            나오지 않고 있음.
            
        - es3로 타겟팅 하는 개발자들은 생각을 좀 해봐야 할 문제이다.
*/
const tsArray12_2 = ['first', 'second'];
// ts
tsArray12_2.forEach((item) => {
    console.log(item);
});
// js
tsArray12_2.forEach(function(item) {
    console.log(item);
});
// target 이 es3 인데도 forEach 는 트랜스파일이 되지 않았음.
// https://github.com/Microsoft/TypeScript/issues/2410