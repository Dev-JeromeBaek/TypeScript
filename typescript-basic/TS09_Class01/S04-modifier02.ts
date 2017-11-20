/*
    ## 접근제어자(2)
        - 1. 부모에서 private으로 설정된 프로퍼티는 상속을 받은 자식에서도 접근할 수 있다.
        - 2. 부모에서 protected로 설정된 프로퍼티는 상속을 받은 자식에서 접근이 가능하다.
        - 3. 상속을 받은 자식 클래스에서 부모 클래스에 this를 통해 접근하려면, 
                생성자에서 super();를 통해 꼭 부모 생성자를 호출해 주어야 한다.
*/

class Parent9_4 {
    private privateProp9_41: string;
    protected protectedProp9_41: string;

    constructor() {

    }
}

class Child9_$ extends Parent9_4 {
    constructor() {
        super();

        this.protectedProp9_41 = 'protected';
        // this.protectedProp9_41 = 'private';// (X)
    }
}