/*
    ## Interface
        - function in interface
*/

interface Person05 {
	name: string;
	age?: number;
	hello05(): void;
}

const p51: Person05 = {
	name: 'Jerome',
	age: 27,
	hello05: function(): void {
		console.log(this);
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}
};

const p52: Person05 = {
	name: 'Jerome',
	age: 27,
	hello05: function(): void {
		console.log(this);
		console.log(`안녕하세요! ${this.name} 입니다.`);
	}
};

const p53: Person05 = {
	name: 'Jerome',
	hello05: (): string => {
		return 'Hello';
	}
};

function hello05(p: Person05): void {
	console.log(`안녕하세요 ${p.name} 입니다.`);
	// p: Person5 입력 설정
	// void 출력 설정
}