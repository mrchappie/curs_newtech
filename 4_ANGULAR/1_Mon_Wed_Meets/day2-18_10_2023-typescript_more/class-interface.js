var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.publicP = 'PUBLIC';
        this.protectedP = 'PROTECTED';
        this.privateP = 'PRIVATE';
        this.name = name;
    }
    Parent.prototype.greeting = function () {
        console.log('Hello from', this.name);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, nickName) {
        var _this = _super.call(this, name) || this;
        _this.nickName = nickName;
        return _this;
    }
    Child.prototype.test = function () {
        this.publicP;
        this.protectedP;
        // this.privateP;
    };
    return Child;
}(Parent));
var child = new Child('Jim', 'Jimmy');
child.greeting();
child.publicP;
// child.protectedP;
// child.privateP;
