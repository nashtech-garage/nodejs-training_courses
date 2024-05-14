import type { Account } from "./interface";

interface Name {
	firstName: string;
	lastName: string;
}

class User {
	name: Name;

	constructor(
		firstName: string,
		lastName: string,
		public username: string,
		public password: string,
	) {
		this.name = {
			firstName,
			lastName,
		};
	}
}

class User2 implements Account {
	constructor(
		public firstName: string,
		public lastName: string,
		public username: string,
		public password: string,
	) {}
}

const x = new User("John", "Doe", "johndoe", "password");
const y = new User2("John", "Doe", "johndoe", "password");
const z1 = {} as User;
const z2 = <User>{}


console.log(x);
console.log(y);
// console.log(z.name.firstName);

export { User, User2 };
