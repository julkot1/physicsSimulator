import Matter, {Bodies} from "matter-js";

export default class Body{
    constructor(x,y, param){
        this.body = Bodies.rectangle(x, y, 40, 40,{mass: 0.85, frictionAir: 0, friction:0, frictionStatic:0});
        this.bg = param.bg;
        this.forceW = 0;
    }
    show(p){
        p.fill(this.bg?this.bg:255);
        p.noStroke();
        p.beginShape();
        this.body.vertices.forEach(e => {
          p.vertex(e.x, e.y);
        });
        p.endShape();

        this.drawForce(p);
        
    }

    drawForce(p){
      const {x, y} = this.body.position;
      p.push()
      p.noStroke();
      p.fill('#0087fc');
      p.translate(x,y)
      p.rotate(this.body.angle);
      p.rect(0,0, this.forceW, 4);
      p.pop();
    }
    setPositionFromAngle(angle, h, w,slopeH){
      Matter.Body.setPosition(this.body, {x: 40, y: h-Math.sin(angle)*(w/2)-20+Math.sin(angle)*slopeH});
      this.rotate(angle)
    }
    setData({force, slope, friction, mass, frictionStatic}){
      this.forceW = 30+force*4;
      Matter.Body.setMass(this.body, mass/10);
      this.body.friction = friction?friction/10:0;
      this.body.frictionStatic=frictionStatic?frictionStatic/10:0;
      if(force&&slope){
        const angle = slope * Math.PI/180;
        Matter.Body.applyForce(this.body, this.body.position,{y:  Math.sin(angle)*force/1500, x: Math.cos(angle)*force/1500});
        
      }
    }
    setForce({x,y}){
      Matter.Body.applyForce(this.body, this.body.position,{y: y/1500, x:x/1500});
    }
    setVelocity({x,y}){
      Matter.Body.setVelocity(this.body, {x: x, y: y})
    }
    rotate(angle){
      Matter.Body.rotate(this.body, angle-this.body.angle);
    }
};



