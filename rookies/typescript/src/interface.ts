export interface User {
	firstName: string;
	lastName: string;
	dateOfBirth?: Date;
	address?: Address;
}

interface Address {
	street: string;
	city: string;
	country: string;
}

export const user: User = {
	firstName: "John",
	lastName: "Doe",
	dateOfBirth: undefined,
	// dateOfBirth: new Date("2000-01-01"),
	// address: {
	//   street: "123 Fake St",
	//   city: "Springfield",
	//   country: "USA",
	// }
};

interface LogFunction {
	// biome-ignore lint/style/useShorthandFunctionType: <explanation>
	(message: string): void;
	error(message: string): void;
}

const log: LogFunction = (message) => {
	console.log(message);
};
log.error = (message) => {
	console.error(message);
};

interface Dictionary {
	[key: string]: string;
	name: string;
}

interface Vip {
	vipLevel: number;
}

// Array<string> is equivalent to string[] and Collection
export interface Account extends User {
	username: string;
	password: string;
}

interface VipAccount extends Account, Vip {}

const acc: Account = {
	firstName: "John",
	lastName: "Doe",
	username: "johndoe",
	password: "password",
};

const vip: VipAccount = {
	firstName: "John",
	lastName: "Doe",
	username: "johndoe",
	password: "password",
	vipLevel: 1,
};
