const constant: string = 'abc';
let variable: string = 'abc';

let n: number = 1,
  s: string = 'abc',
  b: boolean = true,
  obj: object = {},
  symbol: Symbol = Symbol('id');

let arrOfNumbers: number[] = [1, 2, 3],
  arrOfNumbers2: Array<number> = [1, 2, 3],
  arrOfStrings: string[] = ['a', 'b', 'c'];

let matrix: Array<Array<number>> = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  matrix2: number[][] = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

type MixedArray = [number, string];

let tuple: [number, string] = [1, 'a'];
let tuple2: MixedArray = [1, 'a'];

function f() {}
let f1: Function = f,
  f2: () => void = f;

let sum: (a: number, b: number) => number;
sum = (a, b) => a + b;

let increment: (x: number) => number = (x) => x + 1;
