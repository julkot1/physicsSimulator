import Matter, {Bodies} from "matter-js";
import Vector from "./vector";

export default class Body{
  constructor(x,y, {data, bg, body}){
    this.setBodySize(data.mass)
    this.body = Bodies.rectangle(x, y-this.size/2-5, this.size, this.size,Object.assign({mass: data.mass, frictionAir: 0, friction:0, frictionStatic:0}, body));
    this.params = {bg: bg};
    this.vectors = [];

    this.setBodyProperties(data);
  }
  addVector(color, lenghtFunction){
    const vector = new Vector(color);
    vector.setLength(()=>lenghtFunction(this.body, this.params));
    this.vectors.push(vector);
  }
  show(p){
    p.fill(this.params.bg?this.params.bg:255);
    p.noStroke();
    p.beginShape();
    this.body.vertices.forEach(e => {
      p.vertex(e.x, e.y);
    });
    p.endShape();
    this.vectors.forEach(vec=>vec.update(p, this.body));
  }
  setBodyProperties({force, slope, friction, mass,  frictionStatic}){
      this.params.friction = friction||0;
      this.params.frictionStatic = frictionStatic||0;
      this.params.slope = slope;
      Matter.Body.setMass(this.body, mass);
      this.setBodySize(mass);
      const a = (force||0)/this.body.mass;
      this.params.forceAcceleration={x:a*Math.sin(this.body.angle),y:a*Math.cos(this.body.angle)};
      this.params.force=force
  }
  setBaseVelocity({x,y}){
    Matter.Body.setVelocity(this.body, {x:x,y:y});
  }
  acceleration(){
    const angle = this.body.angle;
  
    const a1= this.params.forceAcceleration;
    const a2 = Matter.Vector.add(a1, this.body.velocity);

    const a3 =  {x:  this.params.friction*Math.cos(angle)*-1, y:this.params.friction*Math.sin(angle)};
    
    const a3mag = Matter.Vector.magnitude(a3);
    if(a3mag===NaN)a3mag=0;
    const Tstatic = this.params.frictionStatic*Math.pow(Math.cos(angle),2);
    let a = Matter.Vector.add(a2,a3);
    const amag = Matter.Vector.magnitude(a2);
   
    if(Tstatic<Matter.Vector.magnitude(a))Matter.Body.setVelocity(this.body,amag>a3mag?a:{x:0,y:0});
  }
  accelerationOnSlope(){
    const angle = this.body.angle;
    console.log(Math.round(180/Math.PI*angle));
    const v = (Math.round(180/Math.PI*angle)>0?Math.sin(Math.abs(angle)):0)+this.params.force||0;
    const a3 =  {x:  this.params.friction*Math.cos(angle)*-1, y:this.params.friction*Math.sin(angle)};
    const a3mag = Matter.Vector.magnitude(a3);

    if((v-a3mag)>0){
      const a2 = Matter.Vector.add(this.params.forceAcceleration, this.body.velocity);
      let a = Matter.Vector.add(a2,a3);
      Matter.Body.setVelocity(this.body,a);
      return true;
    }
    return false;
  }
  rotate(angle){
    Matter.Body.rotate(this.body, angle-this.body.angle);
  }
  setBodySize(mass){
    this.size = 100*(mass)/80+40;
  }
  setPositionFromAngle(angle, h, w){
    Matter.Body.setPosition(this.body, {x: 60, y: h-Math.sin(angle)*(w/2)-this.size/2+Math.sin(angle)*30});
    this.rotate(angle)
  }
}

