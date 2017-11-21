/*
    ## 접근제어자(1)
        - 1. private으로 설정된 프로퍼티는 dot으로 접근할 수 없다.
        - 2. 클래스 내부에서는 private프로퍼티를 사용할 수 있다.
        - 3. private이 붙은 변수나 함수는 _를 이름앞에 붙이는데,
                이는 문법이 아니라 널리 쓰이는 코딩 컨벤션이다.
*/

class Person9_3 {
    public name9_31: string = null;
    private _age9_31: number = null;

    constructor(_age9_32: number) {
        this._age9_31 = _age9_32;
    }
}

const person9_31: Person9_3 = new Person9_3(27);
person9_31.name9_31 = 'Jerome';    // person._age9_31 (X)
console.log(person9_31);    //Person9_3 { name9_31: 'Jerome, _age9_31}