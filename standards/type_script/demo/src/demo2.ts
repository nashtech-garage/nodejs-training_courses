
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("MyString");
console.log(output);

let output2 = identity("MyTring");
console.log(output2);

let output3 = identity<number>(3);
console.log(output3);