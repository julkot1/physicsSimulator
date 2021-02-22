import { Rotate } from "react-reveal";

 export default class Force{
    constructor(){
        this.w=0;
    }
    setForceVal(force){
        this.w = 30+force*4;
    }
    draw({position, angle}, p){
        const {x,y} = position;
        p.noStroke();
        p.fill('#0087fc');
        p.translate(x,y)
        p.rotate(angle);
        p.rect(0,0, this.w, 4);
    }
 }