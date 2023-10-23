var special = 'abc';
// special = null;
// special = '';
special === null || special === void 0 ? void 0 : special.concat('something');
function suffix(s) {
    var _a;
    return (_a = s === null || s === void 0 ? void 0 : s.concat('suffix')) !== null && _a !== void 0 ? _a : 'suffix';
}
function add0(input) {
    if (typeof input === 'string') {
        return input + '0';
    }
    return input * 10;
}
add0('aaa');
add0(1);
