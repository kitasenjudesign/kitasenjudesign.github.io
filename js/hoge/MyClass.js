import $ from 'jquery';
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.Say = function () {
        console.log("say");
        $("#fuga").text("fugafugafuga");
    };
    return MyClass;
}());
export { MyClass };
//# sourceMappingURL=MyClass.js.map