import {Bodies, Vector, Body} from "matter-js";
import {background} from "../colors";
export default class Ground{
    constructor(x, y, w, h, param, color){
        this.body = Bodies.rectangle(x, y, w, h, Object.assign({isStatic: true}, param));
        this.w = w;
        this.h = h;
        this.color = color;
    }
    show(p){
        p.fill(this.color || p.color(background));
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
