/*
    ## 클래스와 디폴트 생성자
        - 1. 디폴트 생성자는 프로그래머가 만든 생성자가 없을 때 사용할 수 있다.
            => 사용자가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
*/
class Person9_5 {
    constructor(age) {
        this.name9_51 = null;
        this._age9_51 = null;
        this._age9_51 = age;
    }
}
const person9_51 = new Person9_5(27);
