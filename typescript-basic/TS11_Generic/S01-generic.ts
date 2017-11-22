/*
    ## Generic
        - Generic을 쓰는 가장 큰 이유는 Type을 변수로 주고싶을 때 사용.
*/

function tHelloString11_1(message: string): string {
	return message;
}

function tHelloNumber11_1(message: number): number {
	return message;
}

// 위 두개의 함수를 봤을 때 분명히 비효율적인 코드임을
// 알 수 있음. 

function TsHelloAny11_1(message: any): any {
	return message;
}
// 이를 해결하기 위해선 해당 코드처럼 any를 사용해도 되지만,
// Generic 설정을 하여 any를 사용했을 때 발생하는 문제점을
// 보완, 개선할 수 있다.
function TsHelloGeneric11_1<T>(message: T): T {
	return message;
}

console.log(TsHelloAny11_1('Jerome').length);
console.log(TsHelloAny11_1(27).length);
// hello<string>(11);	// (X)


console.log(TsHelloGeneric11_1(27).toString());
// console.log(helloGeneric<number>(27).toString());

// helloAny의 리턴이 any이기 때문에 타입 헬퍼가 제대로 되지 않는다.
// helloGeneric를 사용하면 정상적으로 사용가능하다.

/*
function HelloString(message: string): string {
	return message;
}

function HelloNumber(message: number): number {
	return message;
}

function HelloAny(message: any): any {
	return message;
}

function HelloGeneric<T>(message: T): T {
	return message;
}

console.log(HelloAny('Jerome').length);
console.log(HelloAny(27).length);
// hello<string>(11);	// (X)


console.log(HelloGeneric(27).toString());
// console.log(helloGeneric<number>(27).toString());

*/