import {Bodies, Vector, Body} from "matter-js";

export default class Ground{
    constructor(x, y, w, h, param){
        this.body = Bodies.rectangle(x, y, w, h, Object.assign({isStatic: true}, param));
        this.w = w;
        this.h = h;
    }
    show(p){
        p.fill(82);
        p.noStroke();
        p.beginShape();
        this.body.vertices.forEach(e => {
          p.vertex(e.x, e.y);
        });
        p.endShape();
    }
    setSlopeAngle(angle){
        const {x, y} = this.body.position;
        this.body = Bodies.rectangle(x, y, this.w/Math.cos(angle), this.h, {isStatic: true, angle: angle});
    }
};
