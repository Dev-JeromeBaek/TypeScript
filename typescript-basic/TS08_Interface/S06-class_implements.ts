/*
    ## Interface
        - class implements interface
*/

interface IPerson6 {
	name: string;
	age?: number;
	hello(): void;
}

class Person6 implements IPerson6 {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	hello(): void {
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}

	public hi(): void {
		console.log(`안녕 ${this.name} 임.`);
	}
}

const person6 = new Person6('Jerome');
person6.hello();	// 안녕하세요! Jerome 입니다.
person6.hi();	// 안녕 Jerome 임.