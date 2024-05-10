import type { User } from "./interface";

class Person implements User {
	static count = 0;
	public get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	public get age() {
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		return new Date().getFullYear() - this.dateOfBirth!.getFullYear();
	}
	public set age(value: number) {
		this.dateOfBirth = new Date(
			new Date().getFullYear() - value,
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			this.dateOfBirth!.getMonth(),
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			this.dateOfBirth!.getDate(),
		);
	}

	placeOfBirth = "Earth";

	constructor(
		public firstName: string,
		public lastName: string,
		public dateOfBirth?: Date,
		public address?: Address,
	) {}

	protected getFullName(prefix: string) {
		return `${prefix} ${this.firstName} ${this.lastName}`;
	}
}

const john = new Person("John", "Doe", new Date("2000-01-01"));
john.age = 30;
console.log(john.dateOfBirth);

class Staff extends Person {
	company!: string;

	getName() {
		return super.getFullName("mr.");
	}
}

// class Person
// instance john
class Uploader {
	static MAX_FILE_SIZE = 1000000;

	private checkMaxFileSize(file: File): boolean {
		return file.size <= Uploader.MAX_FILE_SIZE;
	}

	upload(file: File) {
		if (!this.checkMaxFileSize(file)) {
			return;
		}
		// do upload
	}
}
