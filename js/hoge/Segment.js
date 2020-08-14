import { Point } from "./Point";
var Segment = /** @class */ (function () {
    /*
    this.rand = new p5.Vector();
    this.randTgt = new p5.Vector();
    this.isRandom = false;
    this.b = new p5.Vector();
    this.angle = 0;
    this.sw = map(i, 0, 20, 1, 10);
    this.len = len;
    */
    function Segment(point, len, i) {
        //segmentのとき
        this.tgtX = 0;
        this.tgtY = 0;
        this.tgtR = 0;
        this.rand = new Point(0, 0);
        this.randTgt = new Point(0, 0);
        this.isRandom = false;
        this.a = point; //new Point(0,0);
        this.b = new Point(window.innerWidth / 2, 100);
        this.angle = 0;
        this.len = len;
    }
    Segment.prototype.setRandom = function (isRand) {
        if (isRand) {
            this.randTgt.x = 0.8 * this.len * (Math.random() - 0.5);
            this.randTgt.y = 0.8 * this.len * (Math.random() - 0.5);
        }
        else {
            this.randTgt.x = 0.2 * this.len * (Math.random() - 0.5);
            this.randTgt.y = 0.2 * this.len * (Math.random() - 0.5);
        }
        this.rand.x = this.randTgt.x;
        this.rand.y = this.randTgt.y;
    };
    Segment.prototype.follow = function (tx, ty) {
        //ターゲットの位置
        var target = new Point(tx, ty);
        //a点の位置をランダムに変える
        this.rand.x += (0 - this.rand.x) / 14;
        this.rand.y += (0 - this.rand.y) / 14;
        this.a.x += this.rand.x;
        this.a.y += this.rand.y;
        //a点からtgtに向かう方向ベクトル
        var dir = Point.Sub(target, this.a);
        //そのベクトルが成す角度
        this.angle = dir.GetRotation();
        //従来の長さに固定
        dir.SetMagnitude(this.len);
        //逆ベクトル
        dir.x *= -1;
        dir.y *= -1;
        //ターゲットの位置にくっつける、dir方向に
        this.a = Point.Add(target, dir);
    };
    Segment.prototype.followChildA = function (ttx, tty) {
        if (ttx === void 0) { ttx = 0; }
        if (tty === void 0) { tty = 0; }
        this.a.x += ttx;
        this.a.y += tty;
        this.follow(this.child.a.x, this.child.a.y);
    };
    Segment.prototype.update = function () {
        //aからangle len離れた場所がb
        var dx = this.len * Math.cos(this.angle);
        var dy = this.len * Math.sin(this.angle);
        this.b.x = this.a.x + dx;
        this.b.y = this.a.y + dy;
        /*
        if(this.b.x<0)this.b.x=0;
        if(this.b.y<0)this.b.y=0;
        if(this.b.x>window.innerWidth)this.b.x=window.innerWidth;
        if(this.b.y>window.innerHeight)this.b.y=window.innerHeight;
        */
    };
    Segment.prototype.updateTgt = function (tx, ty, tr, spd) {
        this.tgtX += (tx - this.tgtX) / spd;
        this.tgtY += (ty - this.tgtY) / spd;
        this.tgtR += (tr - this.tgtR) / (spd * 2);
    };
    return Segment;
}());
export { Segment };
//# sourceMappingURL=Segment.js.map