type SpecialString = string | null;

let special: SpecialString = 'abc';
// special = null;
// special = '';

special?.concat('something');

function suffix(s: string | undefined): string {
  return s?.concat('suffix') ?? 'suffix';
}

function add0(input: string | number) {
  if (typeof input === 'string') {
    return input + '0';
  }
  return input * 10;
}

// add0('aaa');
// add0(1);

let anyVal: any, unknownVal: unknown;
// anyVal.somProp();
if (typeof unknownVal === 'string') unknownVal.concat('');

type TicTacToe = undefined | 'X' | 0;

const ticTacToe: TicTacToe[][] = [
  ['X', , 0],
  [0, 'X', 0],
  ['X', , 'X'],
];

ticTacToe[0][1] = null;
ticTacToe[0][1] = 'X';
ticTacToe[0][1] = 0;

// type Border = [number, string, string];
type Unit = 'px' | 'em' | 'rem' | '%';
type BorderStyle = 'solid' | 'dashed' | 'dotted';
type BorderColor = [red: number, blue: number, green: number, alpha?: number];
type BorderWidth = `${number}${Unit}`;
type Border = [BorderWidth, BorderStyle, BorderColor];

function getBorder([width, style, color]: Border) {
  return `${width} ${style} rgba(${color[0]}, ${color[1]}, ${color[2]}, ${
    color[3] ?? 1
  })`;
}

console.log(getBorder(['10px', 'solid', [255, 255, 255, 1]]));
console.log(getBorder(['10px', 'solid', [255, 255, 255]]));
