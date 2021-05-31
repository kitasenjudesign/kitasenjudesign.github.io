import $ from 'jquery';
var MyClock = /** @class */ (function () {
    function MyClock() {
        var hoge = this;
        setInterval(function () {
            hoge.Update();
        }, 1000);
    }
    MyClock.prototype.Update = function () {
        console.log("update");
        var date = new Date();
        var hh = this.AddZero(date.getHours(), 2);
        var mm = this.AddZero(date.getMinutes(), 2);
        var ss = this.AddZero(date.getSeconds(), 2);
        var youbi = date.getDay();
        var dt = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var youbiAry = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var monthAry = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var str = hh + ":" + mm + ":" + ss + " " + youbiAry[youbi] + "," + monthAry[month] + " " + this.AddZero(dt, 2) + ", " + year;
        $("#clock").text(str);
    };
    MyClock.prototype.AddZero = function (num, length) {
        return ('0000000000' + num).slice(-length);
    };
    return MyClock;
}());
export { MyClock };
//# sourceMappingURL=MyClock.js.map