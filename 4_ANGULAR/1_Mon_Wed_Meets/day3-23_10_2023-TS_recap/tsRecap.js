function toOrFromNumber(input) {
    if (typeof input === 'number')
        return input.toString();
    return +input;
}
function padWithZeros(input) {
    if (typeof input === 'number')
        return input * 10;
    return input + '0';
}
var s = '1';
var paddedS = padWithZeros(s);
console.log(padWithZeros(s));
console.log(paddedS.concat('$'));
