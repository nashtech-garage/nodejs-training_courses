interface Address {
	street: string;
	city: string;
	country: string;
	type: "address";
}

type Address2 = {
	street: string;
	city: string;
	country: string;
};


const add2: Address2 = {
	street: "123 Fake St",
	city: "Springfield",
	country: "USA",
};

type Age = number | Date;
const age: Age = 20;
const dob: Age = new Date("2000-01-01");

type ContactPoint = {
	type: "contact";
	email: string;
	phone: string;
};

type All = Address & ContactPoint; // interface Address extends ContactPoint
type OneOf = Address | ContactPoint;

// const all: All = {
//   type: "address", // "contact"
// 	street: "123 Fake St",
// 	city: "Springfield",
// 	country: "USA",
// 	email: "",
// 	phone: "",
// };

// const oneOfAddress: OneOf = {
// 	type: "address",
// 	street: "123 Fake St",
// 	city: "Springfield",
// 	country: "USA",
// };

const oneOfContact: OneOf = {
	type: "contact",
	email: "",
	phone: "",
};

type AddressName = string;
type AddressName2 = "address"; // constant

const aname: AddressName = "address222";
const aname2: AddressName2 = "address";


interface Address {
  district: "Tan Binh" | "Tan Phu";
}
