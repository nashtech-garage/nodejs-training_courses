abstract class Person {
	firstName!: string;
	lastName!: string;

	abstract company: string;
}

export class Staff extends Person {
	company!: string;
}

const john = new Staff();

console.log(john);

abstract class PaymentMethod {
	abstract pay(amount: number): void;
}

class CreditPayment extends PaymentMethod {
	pay(amount: number) {
		// creditService.pay(amount);
	}
}

class CashPayment extends PaymentMethod {
	pay(amount: number) {
		// save amount to cash register
	}
}
