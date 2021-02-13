import  Matter, {Bodies} from "matter-js";
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
    setSlopeAngle(angle, width,height,e){
        if(e)Matter.Composite.remove(e.engine.world, this.body)
        const H = Math.sin(angle)*width/2;
        const W = Math.cos(angle)*width/2;
        
        this.body=Bodies.rectangle(W*Math.sqrt(3)/4+30, height-(H/2), width/2, 10, {angle: angle, isStatic: true});
        if(e)Matter.World.add(e.engine.world, this.body)
    }
};
