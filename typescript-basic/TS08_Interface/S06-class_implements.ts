/*
    ## Interface
        - class implements interface
*/

interface IPerson8_6 {
	name: string;
	age?: number;
	hello8_6(): void;
}

class Person8_6 implements IPerson8_6 {
	name: string = null;

	constructor(name: string) {
		this.name = name;
	}

	hello8_6(): void {
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}

	public hi8_6(): void {
		console.log(`안녕 ${this.name} 임.`);
	}
}

const person8_61 = new Person8_6('Jerome');
person8_61.hello8_6();	// 안녕하세요! Jerome 입니다.
person8_61.hi8_6();	// 안녕 Jerome 임.