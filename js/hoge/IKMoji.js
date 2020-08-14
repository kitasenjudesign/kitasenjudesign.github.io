import $ from 'jquery';
import { Point } from "./Point";
import { Segment } from './Segment';
import { RandomText } from './RandomText';
var IKMoji = /** @class */ (function () {
    function IKMoji(text, parentId) {
        var _this = this;
        this.tgtX = 0;
        this.tgtY = 0;
        this.posX = 0;
        this.posY = 0;
        this.tmpX = 0;
        this.tmpY = 0;
        this.tgtLen = 10;
        this.scrollY = 0;
        this.isRandom = false;
        this.oldY = 0;
        this.subY = 0;
        this.scaleA = 1;
        this.speedX = 10;
        this.speedY = 10;
        this.isFix = false;
        this.intervalId = 0;
        this.currentText = "";
        this.distance = 0;
        this.count = 0;
        this.currentText = text;
        //var gui = new dat.GUI();
        //gui.add(this,"currentText").listen();
        this.mojis = [];
        this.lenTargets = [];
        this.segs = [];
        this.randomText = new RandomText();
        var link = document.getElementById(parentId);
        for (var i = 0; i <= this.currentText.length + 1; i++) {
            //var d = document.getElementById("m"+i);
            var d = document.createElement("span");
            d.id = "m" + i;
            link.appendChild(d);
            this.mojis.push(d);
        }
        var point = new Point(window.innerWidth * Math.random(), window.innerHeight * Math.random());
        var current = new Segment(point, 20, 0);
        for (var i = 0; i < this.mojis.length + 1; i++) {
            this.lenTargets.push(10);
            this.segs.push(current);
            var next = new Segment(current.b.Clone(), 20, i);
            current.child = next;
            current = next;
        }
        this.tentacle = current;
        this.changeParam();
        window.onclick = function () {
            _this.changeParam();
        };
        $(window).scroll(function () {
            _this.changeParam();
            _this.isFix = false;
            var doch = window.innerHeight; //ページ全体の高さ
            var winh = $(window).innerHeight(); //ウィンドウの高さ
            var hh = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
            //console.log(doch,winh,$(window).scrollTop());
            //console.log($(window).scrollTop()-bottom);
            console.log(hh, $(window).scrollTop());
            if ($(window).scrollTop() + hh >= 0) {
                console.log("fin");
                _this.isFix = true;
            }
        });
        setInterval(function () {
            //if($(window).scrollTop()==0)this.changeParam();
            _this.changeParam();
        }, 1000);
        this.update();
        this.UpdateText();
    }
    IKMoji.prototype.UpdateText = function () {
        /*
        let rand = Math.random();
        if(rand<0.25){
            this.currentText="あのイーハトーヴォのすきとおった風";
        }else if(rand<0.5){
            this.currentText="うつくしい森で飾られたモリーオ市";
        }else if(rand<0.75){
            this.currentText="夏でも底に冷たさをもつ青いそら";
        }else{
            this.currentText="郊外のぎらぎらひかる草の波";
        }*/
        //this.currentText="10:29:46 Thu,August 13, 2020";
        //"あのイーハトーヴォのすきとおった風うつくしい森で飾られたモリーオ市夏でも底に冷たさをもつ青いそら郊外のぎらぎらひかる草の波/あのイーハトーヴォのすきとおった風うつくしい森で飾られたモリーオ市夏でも底に冷たさをもつ青いそら郊外のぎらぎらひかる草の波";
        this.randomText.Show(this.currentText);
        /*
        for(let i=0;i<=15;i++){

            if(i<this.currentText.length){
                this.mojis[i].textContent = this.currentText.substr(i,1);
            }else{
                this.mojis[i].textContent = "";
            }

        }*/
    };
    IKMoji.prototype.changeParam = function () {
        this.UpdateText();
        this.scrollY = 0; //$(window).scrollTop();
        //console.log("click " + this.scrollY );
        this.distance = Math.random() * 20 * this.scaleA + 10;
        if (Math.random() < 0.05)
            this.distance = Math.random() * 100 * this.scaleA + 10;
        //console.log(this.lenTargets);
        for (var i = 0; i < this.lenTargets.length; i++) {
            this.lenTargets[i] = this.distance;
        }
        if (Math.random() < 0.5) {
            this.tgtX = window.innerWidth / 2 + 0.7 * window.innerWidth * (Math.random() - 0.5);
            this.tgtY = window.innerHeight / 2 + 0.7 * window.innerHeight * (Math.random() - 0.5);
        }
        else {
            this.tgtX += window.innerWidth / 5 * (Math.random() - 0.5);
            this.tgtY += window.innerHeight / 5 * (Math.random() - 0.5);
        }
        //this.scaleA=1.5;//+1.5*Math.random();
        for (var i = 0; i < this.lenTargets.length; i++) {
            this.lenTargets[i] = this.distance;
        }
        this.scaleA = 3;
        //for(var i=0;i<segs.length;i++){
        //  segs[i].len = random() * 70;
        //}
        this.isRandom = Math.random() < 0.5 ? true : false;
        this.speedX = 20 + 10 * Math.random();
        this.speedY = 20 + 10 * Math.random();
        //console.log(tgtX+" "+tgtY+" "+scaleA);
        for (var i = 0; i < this.segs.length; i++) {
            this.segs[i].setRandom(this.isRandom);
        }
    };
    IKMoji.prototype.update = function () {
        //
        this.randomText.Update();
        var txt = this.randomText.text;
        for (var i = 0; i < this.mojis.length; i++) {
            var str = this.randomText.text.substr(i, 1);
            if (i < this.randomText.text.length) {
                this.mojis[i].textContent = str;
            }
            else {
                this.mojis[i].textContent = "";
            }
        }
        //if(i<this.currentText.length){
        //    this.mojis[i].textContent = this.currentText.substr(i,1);
        //}else{
        var dx = this.tgtX - this.posX;
        var dy = this.tgtY - this.posY;
        this.tmpX += dx / this.speedX;
        this.tmpY += dy / this.speedY;
        this.tmpX *= 0.7;
        this.tmpY *= 0.7;
        this.posX += this.tmpX;
        this.posY += this.tmpY;
        this.subY = Math.abs(document.documentElement.scrollTop - this.oldY);
        this.oldY = document.documentElement.scrollTop;
        //一番先端はposXをフォローする
        this.tentacle.follow(this.posX, this.posY);
        this.tentacle.update();
        for (var i = 1; i < this.segs.length; i++) {
            var ddx = 0;
            var ddy = 0;
            //反発力
            for (var j = 0; j < this.segs.length; j++) {
                var dx_1 = this.segs[i].a.x - this.segs[j].a.x;
                var dy_1 = this.segs[i].a.y - this.segs[j].a.y;
                if (dx_1 != 0 && dy_1 != 0) {
                    var dd = Math.sqrt(dx_1 * dx_1 + dy_1 * dy_1);
                    dd = dd / (this.distance * 0.8);
                    if (dd > 1)
                        dd = 1;
                    ddx += 0.2 * (dx_1 * (1 - dd));
                    ddy += 0.2 * (dy_1 * (1 - dd));
                }
            }
            //先端以降はchilのaをフォローする
            this.segs[i].followChildA(ddx, ddy);
            this.segs[i].update();
        }
        for (var i = 0; i < this.mojis.length; i++) {
            var idx = this.segs.length - 1 - i;
            this.segs[idx].len += (this.lenTargets[i] - this.segs[idx].len) / 10;
            var xx = 0; //
            var yy = 0; //
            var rr = 0;
            if (this.isFix) {
                //footer
                this.segs[idx].updateTgt(window.innerWidth / 2 + 17 * (i - this.currentText.length / 2), window.innerHeight - 105, 0, 10);
                this.scaleA = 1;
            }
            else {
                this.segs[idx].updateTgt(this.segs[idx].b.x, this.segs[idx].b.y, this.segs[idx].angle / Math.PI * 180 + 180, 2);
            }
        }
        if (this.count % 1 == 0) {
            for (var i = 0; i < this.mojis.length; i++) {
                var idx = this.segs.length - 1 - i;
                xx = this.segs[idx].tgtX - this.mojis[i].clientWidth / 2;
                yy = this.segs[idx].tgtY;
                rr = this.segs[idx].tgtR;
                this.mojis[i].style.zIndex = "" + (i + 200);
                this.mojis[i].style.position = "fixed";
                this.mojis[i].style.left = xx + "px";
                this.mojis[i].style.top = yy + "px";
                this.mojis[i].style.transform = "rotate(" + rr + "deg) scale(" + this.scaleA + "," + this.scaleA + ")";
            }
        }
        this.count++;
        window.requestAnimationFrame(this.update.bind(this));
    };
    return IKMoji;
}());
export { IKMoji };
//# sourceMappingURL=IKMoji.js.map