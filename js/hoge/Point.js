var Point = /** @class */ (function () {
    function Point(xx, yy) {
        this.x = xx;
        this.y = yy;
    }
    Point.Sub = function (aa, bb) {
        var p = new Point(aa.x - bb.x, aa.y - bb.y);
        return p;
    };
    Point.Add = function (aa, bb) {
        var p = new Point(aa.x + bb.x, aa.y + bb.y);
        return p;
    };
    Point.prototype.SetMagnitude = function (amp) {
        var a = Math.sqrt(this.x * this.x + this.y * this.y);
        var r = Math.atan2(this.y, this.x);
        a = amp;
        this.x = a * Math.cos(r);
        this.y = a * Math.sin(r);
    };
    Point.prototype.GetRotation = function () {
        return Math.atan2(this.y, this.x);
    };
    Point.prototype.Clone = function () {
        return new Point(this.x, this.y);
    };
    return Point;
}());
export { Point };
//# sourceMappingURL=Point.js.map