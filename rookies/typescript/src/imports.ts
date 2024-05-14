import EMAIL, { email, name, fullName as FULL_NAME } from "./exports";
import * as IMPORT from "./exports";

// console.log(EMAIL); //
// console.log(email); //
// console.log(name); //
// console.log(fullName); //

const { default: Email } = IMPORT;

console.log(Email); //
console.log(FULL_NAME); //
// console.log(email); //
// console.log(name); //
// console.log(fullName); //

console.log(IMPORT.default);
console.log(IMPORT.email); //
console.log(IMPORT.name); //
console.log(IMPORT.fullName); //

export { email } from "./exports";
