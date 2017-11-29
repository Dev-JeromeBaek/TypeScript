/*
    ## Interface
        - function in interface
*/
const p8_51 = {
    name: 'Jerome',
    age: 27,
    hello8_5: function () {
        console.log(this);
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};
const p8_52 = {
    name: 'Jerome',
    age: 27,
    hello8_5: function () {
        console.log(this);
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};
const p8_53 = {
    name: 'Jerome',
    hello8_5: () => {
        return 'Hello';
    }
};
function hello8_5(p) {
    console.log(`안녕하세요 ${p.name} 입니다.`);
    // p: Person5 입력 설정
    // void 출력 설정
}
