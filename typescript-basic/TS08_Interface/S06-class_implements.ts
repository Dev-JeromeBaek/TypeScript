/*
    ## Interface
        - class implements interface
*/

interface IPerson06 {
	name: string;
	age?: number;
	hello06(): void;
}

class Person06 implements IPerson06 {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	hello06(): void {
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}

	public hi06(): void {
		console.log(`안녕 ${this.name} 임.`);
	}
}

const person61 = new Person06('Jerome');
person61.hello06();	// 안녕하세요! Jerome 입니다.
person61.hi06();	// 안녕 Jerome 임.