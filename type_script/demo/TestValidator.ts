import { mainValidator } from "./ZipCodeValidator";
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
import * as validator from "./ZipCodeValidator";

let myValidator = new mainValidator();
let zcv = new ZCV();

const isAccept = myValidator.isAcceptable('23435');
console.log(isAccept);

const isAccept2 = zcv.isAcceptable('12345');
console.log(isAccept2);

