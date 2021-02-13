import Matter, {Bodies} from "matter-js";

export default class Body{
    constructor(x,y, param){
        this.body = Bodies.circle(x, y, 30,{mass: 0.85});
   
    }
    show(p){
        p.fill(255);
        p.noStroke();
        p.beginShape();
        this.body.vertices.forEach(e => {
          p.vertex(e.x, e.y);
        });
        p.endShape();
    }
    
    setPositionFromAngle(angle, h, w){
      Matter.Body.setPosition(this.body, {x: 40, y: h-Math.sin(angle)*(w/2)-26})
    }
    setData({veliocity, slope, friction, mass, frictionStatic}){
      this.body.mass = mass/10;
      this.body.friction = friction/10;
      if(veliocity)Matter.Body.setVelocity(this.body, {x: Math.cos(slope)*veliocity, y: Math.sin(slope)*veliocity})
    }
};



