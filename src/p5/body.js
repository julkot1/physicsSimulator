import Matter, {Bodies} from "matter-js";

export default class Body{
    constructor(x,y, param, data){
      this.d = 100*(data.mass)/80+20;

      this.body = Bodies.rectangle(x, y-this.d/2-5, this.d, this.d,Object.assign({mass: data.mass, frictionAir: 0, friction:0, frictionStatic:0}, param.body));
      this.bg = param.bg;
      this.forceW = 0;
      this.velocityW = 0;
      this.showVelocity = true;
      this.setData(data);
    }
    show(p){
      console.log(this.body.friction);
      p.fill(this.bg?this.bg:255);
      p.noStroke();
      p.beginShape();
      this.body.vertices.forEach(e => {
        p.vertex(e.x, e.y);
      });
      p.endShape();
      this.drawForceVector(p);
      if(this.showVelocity)this.drawVelocityVector(p);
    }

    drawForceVector(p){
      const {x, y} = this.body.position;
      p.push()
      p.noStroke();
      p.fill('#0087fc');
      p.translate(x,y)
      p.rotate(this.body.angle);
      p.rect(0,0, this.forceW, 4);
      if(this.forceW>0)p.triangle(this.forceW+10, 0, this.forceW, -8, this.forceW, 10)
      p.pop();
    }
    drawVelocityVector(p){
      const {x, y} = this.body.position;
      this.setVelocityW(this.body.velocity);
      p.push()
      p.noStroke();
      p.fill('#ffffff');
      p.translate(x,y)
      p.rotate(this.body.angle);
      p.rect(0,0, this.velocityW, 4);
      if(this.velocityW>0)p.triangle( this.velocityW, -8, this.velocityW, 10,this.velocityW+10, 0);
      if(this.velocityW<0)p.triangle( this.velocityW, -8, this.velocityW, 10,this.velocityW-10, 0);
      p.pop();
    }
    setPositionFromAngle(angle, h, w,slopeH){
      Matter.Body.setPosition(this.body, {x: 60, y: h-Math.sin(angle)*(w/2)-this.d/2+Math.sin(angle)*30});
      this.rotate(angle)
    }
    setData({force, slope, friction, mass}){
      this.d = 100*(mass)/80+20;
      if(force!=0)this.forceW=force*4;
      Matter.Body.setMass(this.body, mass);
      if(slope) this.body.friction=friction/1000;
    }
    setFriction({friction, frictionStatic,mass,force}){
      
      if(frictionStatic*mass/100<force&&friction/100*mass<force){
        this.setForce({x: force, y:0});
        this.setForce({x: -force/Math.abs(force)*(friction/100*mass), y:0})

      }
    }
    setForce({x,y}){
      Matter.Body.applyForce(this.body, this.body.position,{y: y/100, x:x/100});
    }
    setVelocity({x,y}){
      Matter.Body.setVelocity(this.body, {x: x, y: y});
    }
    setVelocityW({x,y}){
      let v = Math.sqrt(x*x+y*y)*4
      if(v<0.09)v=0
      if(v!=0)v+=40;
      this.velocityW = Math.round(v*x/Math.abs(x)*100)/100;
    }
    rotate(angle){
      Matter.Body.rotate(this.body, angle-this.body.angle);
    }
};



