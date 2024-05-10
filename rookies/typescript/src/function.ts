// named function

function add(a: number, b = 0, c = 0): number {
	return a + b + c;
}

console.log(add(1, 2, 3)); // 1 + 2 + 3 = 6
console.log(add(1, 2)); // 1 + 2 + 0 = 3
console.log(add(1, undefined, 3)); // 1 + 0 + 3 = 4

// arrow function
const subtract = (a: number, b = 0): number => b - a;

const total = add(1) + add(1, 2);
console.log(subtract(1, 2)); // 1
console.log(subtract(1)); // -1

function multiply(...args: number[]): number {
	return args.reduce((acc, val) => acc * val, 1);
}

console.log(multiply(1, 2, 3, 4, 5)); // 1 * 2 * 3 * 4 * 5 = 120
