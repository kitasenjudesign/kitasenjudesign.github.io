var RandomText = /** @class */ (function () {
    function RandomText() {
        this.count = 0;
        this.text = "";
        this.oldText = "";
        this.newText = "";
    }
    RandomText.prototype.Show = function (t) {
        this.count = 0;
        this.oldText = this.text;
        this.newText = t;
    };
    RandomText.prototype.Update = function () {
        var t = "";
        var n = this.count;
        var n2 = this.oldText.length - this.count;
        var ma = "○";
        if (this.count > this.newText.length)
            n = this.newText.length;
        if (n2 < 0) {
            n2 = 0;
            ma = "";
        }
        var nText = this.newText.substr(0, n);
        this.text = nText + ma + this.oldText.substr(0, this.oldText.length - this.count);
        this.count++;
        //console.log(this.text);
    };
    return RandomText;
}());
export { RandomText };
//# sourceMappingURL=RandomText.js.map