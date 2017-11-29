/*
    ## Class와 싱글톤 패턴
        - 1. private 생성자를 이용해서 내부에서만 인스턴스 생성이 가능하도록 함.
        - 2. public static 메서드를 통해 private static 인스턴스 레퍼런스를 획득함.
        - 3. Lazy Loading (Initialization) : 최초 실행시가 아니라, 사용시에 할당을 함.
*/
// 1
class Preference10_7 {
    constructor() {
    }
    static getInstance() {
        if (Preference10_7.instance === null) {
            Preference10_7.instance = new Preference10_7();
        }
        return Preference10_7.instance;
    }
}
Preference10_7.instance = null;
const p10_7 = Preference10_7.getInstance();
// 2
class Person10_72 {
    constructor() {
    }
    static getInstance() {
        if (Person10_72.Instance === null) {
            Person10_72.Instance = new Person10_72();
        }
        return Person10_72.Instance;
    }
    hello() {
    }
}
Person10_72.Instance = null;
const p10_72 = Person10_72.getInstance();
p10_72.hello();
