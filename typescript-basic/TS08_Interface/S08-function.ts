/*
    ## Interface
        - function interface
        	- 함수의 타입 체크는 할당할 때가 아니라 
        		사용할 떄 한다는 점을 명심.
*/

interface HelloPerson8 {
	// (name: string, age: number): void;
	(name: string, age?: number): void;
}

let helloPerson8: HelloPerson8 = function (name: string) {
	console.log(`안녕하세요! ${name} 입니다.`);
};

helloPerson8('Jerome');	// 안녕하세요! Jerome 입니다.

