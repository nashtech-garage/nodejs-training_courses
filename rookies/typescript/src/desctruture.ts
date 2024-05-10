// const a = [1, 2, 3, 4];

// const [first, second, ...rest] = a;

// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4]

// const b = {
//   first: 1,
//   n: 2,
//   p: 3,
// };

// const { first: the1st, p, ...rest2 } = b;

// console.log(the1st); // 1
// console.log(p); // 2
// console.log(rest2); // { p: 3 }

// type C = {
//   a: string;
//   b: number;
// }

// function N1({ a, b }: C) {
//   console.log(a);
// }
// function N2(c: C) {
//   const { a, b } = c;
//   console.log(a);
// }

// function N3(a0: number, a1: number, ...args: any[]) {
//   console.log(a0);
//   console.log(a1);
//   console.log(args);
// }
// N3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // function N4(c: C) {
// //   const { a, b } = c;
// //   console.log(a);
// // }

const a = [1, 2, 3, 4];

const b = [0, ...a, 5];

console.log(b); // [0, 1, 2, 3, 4, 5]

const x = {
  a: 1,
  b: 2,
  c: 3
}

const y = { ...x, d: 4, c: 5 }


console.log(y);

export { }