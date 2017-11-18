/*
    ## Interface
        - function in interface
*/

interface Person5 {
	name: string;
	age?: number;
	hello5(): void;
}

const p51: Person5 = {
	name: 'Jerome',
	age: 27,
	hello5: function(): void {
		console.log(this);
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}
};

const p52: Person5 = {
	name: 'Jerome',
	age: 27,
	hello5: function(): void {
		console.log(this);
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}
};

const p53: Person5 = {
	name: 'Jerome',
	hello5: (): string => {
		return 'Hello';
	}
};

function hello5(p: Person5): void {
	console.log(`안녕하세요 ${p.name} 입니다.`);
	// p: Person5 입력 설정
	// void 출력 설정
}