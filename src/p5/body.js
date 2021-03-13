import Matter, {Bodies} from "matter-js";
import Vector from "./vector";

export default class Body{
  constructor(x,y, {data, bg, body}){
    this.setBodySize(data.mass)
    this.body = Bodies.rectangle(x, y-this.size/2-5, this.size, this.size,Object.assign({mass: data.mass, frictionAir: 0, friction:0, frictionStatic:0}, body));
    this.params = {bg: bg, drawVelocity: true};
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
    if(this.params.drawVelocity){
      p.push()
      p.textSize(16)
      p.fill('#fffff')
      p.translate( this.body.position.x, this.body.position.y)
      p.rotate(this.body.angle)

      p.text(`v(t) = ${Matter.Vector.magnitude(this.body.velocity).toFixed(2)}`,-50,-this.size+20)
      p.pop()
    }
  }
  setBodyProperties({force, slope, friction, mass,  frictionStatic}){
      this.params.friction = friction||0;
      this.params.frictionStatic = frictionStatic||0;
      this.params.slope = slope;
      Matter.Body.setMass(this.body, mass);
      this.setBodySize(mass);
      const a = (force||0)/this.body.mass;
      this.params.forceAcceleration={x:a*Math.cos(this.body.angle),y:a*Math.sin(this.body.angle)};
      this.params.force=force
      this.params.a=a
  }
  setBaseVelocity({x,y}){
    Matter.Body.setVelocity(this.body, {x:x,y:y});
  }
  acceleration(){

    const T =  {x:  this.params.friction*-10, y:0};
    const Tmag = Matter.Vector.magnitude(T);
    if(Tmag===NaN)Tmag=0;
    const acceleration = {x: this.params.a-Tmag,y :0}
    
    
    const Tstatic = this.params.frictionStatic;
    if(Tstatic<this.params.a&&Tmag<this.params.a){
      Matter.Body.setVelocity(this.body,Matter.Vector.add(acceleration,this.body.velocity));
      console.log(this.params.a-Tmag);
    }
  }
  accelerationOnSlope(){
    const a = Matter.Vector.add(this.params.forceAcceleration, this.body.velocity);
    Matter.Body.setVelocity(this.body,a);
  }
  rotate(angle){
    Matter.Body.rotate(this.body, angle-this.body.angle);
  }
  setBodySize(mass){
    this.size = 80*(mass)/200+40;
  }
  setPositionFromAngle(angle, h, w){
    Matter.Body.setPosition(this.body, {x: 60, y: h-Math.sin(angle)*(w/2)-this.size/2+Math.sin(angle)*40});
    this.rotate(angle)
  }

}

