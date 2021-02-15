import Matter, {Bodies} from "matter-js";

export default class Body{
    constructor(x,y, param){
        this.body = Bodies.circle(x, y, 30,{mass: 0.85, frictionAir: 0, friction:0, frictionStatic:0});
   
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
    
    setPositionFromAngle(angle, h, w,slopeH){
      console.log(Math.sin(angle)*slopeH);
      Matter.Body.setPosition(this.body, {x: 40, y: h-Math.sin(angle)*(w/2)-30+Math.sin(angle)*slopeH})
    }
    setData({force, slope, friction, mass, frictionStatic}){
      this.body.mass = mass/10;
      this.body.friction = friction/10;
      if(force)Matter.Body.applyForce(this.body, this.body.position,{y:  Math.sin(slope)*force/1500, x: Math.cos(slope)*force/1500})
    }
};



