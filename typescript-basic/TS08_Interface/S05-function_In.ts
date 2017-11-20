/*
    ## Interface
        - function in interface
*/

interface Person8_5 {
	name: string;
	age?: number;
	hello8_5(): void;
}

const p8_51: Person8_5 = {
	name: 'Jerome',
	age: 27,
	hello8_5: function(): void {
		console.log(this);
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}
};

const p8_52: Person8_5 = {
	name: 'Jerome',
	age: 27,
	hello8_5: function(): void {
		console.log(this);
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}
};

const p8_53: Person8_5 = {
	name: 'Jerome',
	hello8_5: (): string => {
		return 'Hello';
	}
};

function hello8_5(p: Person8_5): void {
	console.log(`안녕하세요 ${p.name} 입니다.`);
	// p: Person5 입력 설정
	// void 출력 설정
}