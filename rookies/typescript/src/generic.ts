function identity<T>(arg: T): T;
function identity(arg: string | number): string | number {
	return arg;
}

const valueN = identity(42); // expect number, return any
const valueS = identity("42"); // expect string, return any
