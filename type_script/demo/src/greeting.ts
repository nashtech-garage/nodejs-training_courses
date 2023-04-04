function greeting(person){
  console.log(`Hello ${person}`);
}

const person = 'Minh';
greeting(person);

const myArr:Array<string> = ['1', '2', '3']
let x:[string, number] = ['1', 2]

enum Color{Red=1, Green=3, Blue}
console.log(Color.Red, Color[3])

const notSure:any = 4;
// notSure.itIfExits()
let giatri = notSure.toFixed();
console.log(giatri);

let giaTriNumber:number = 5;
giaTriNumber = null;

function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error("Something Failed");
}

function infiniteLoop(): never{
  while(true) {

  }
}

// infiniteLoop()
// fail()
const x1: any = '4';
const y: any = '5';
let ketQua: number;

const a:number = 4;
const b:number = 5;
console.log(a+b);

ketQua = (x1 as number) + <number>y;
console.log(ketQua);

const myArr2 = [1, 2, 5.3, 4];
let [first, second] = myArr2;

console.log(first, second);

[first, second] = [second, first]
console.log(first, second);

function cong2So(HaiSoCanCong: {SoThuNhat: number, SoThuHai?:number} ):number {
  let { SoThuNhat, SoThuHai=100} = HaiSoCanCong;
  return SoThuNhat + SoThuHai
}

let tinhToan = {
  SoThuNhat: 1
};
console.log(cong2So(tinhToan));

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10"};
printLabel(myObj);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src, sub): boolean {
  let result = src.search(sub);
  return result > -1;
}

console.log(mySearch('Tran Minh', 'Minh'));

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', "Fred"];
let myStr: string = myArray[0];
console.log(myStr);

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string
}

/*
interface TestOK {
  [x: number]: Animal;
  [x: string]: Dog;
}
 */
