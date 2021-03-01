import Body from "../body";
import Matter from "matter-js";
import PhysicEngine from "../physicEngine";
import {background, background2} from "../../colors";
export default  (p) => {
    const w = 1000, h = 320;
    let e;
    let boxA,boxB;
    const create = ()=>{
     
      boxA = new Body(100, h, {bg: '#0087fc', body: {restitution: 0, inertia: Infinity}},{mass: 0.5});
      boxB = new Body(w-100, h, {bg: '#509C2F', body: {restitution: 0, inertia: Infinity}},{mass: 0.5});
      e = new PhysicEngine(w,h, {boxA, boxB}, p.canvas)

    }
    p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
      if(boxA){
        if(data.play)e.play()
        else{
          e.restart();
          boxA = new Body(100, h, {bg: '#0087fc', body: {restitution: 0, inertia: Infinity}},{mass: data.massA});
          boxB = new Body(w-100, h, {bg: '#509C2F', body: {restitution: 0, inertia: Infinity}},{mass: data.massB});
          e = new PhysicEngine(w,h, {boxA, boxB}, p.canvas)
  
          boxA.setVelocity({x:data.velocityA, y: 0});
     
          boxB.setVelocity({x:-data.velocityB, y: 0});
        }
      }
    
    }
    
    p.setup =  ()=>{
      p.createCanvas(w, h);
      create()
     
    };
  
    p.draw = ()=>{
      p.background(p.color(background));
      
      
      e.show(p); 
      collides(p)


    };
    const collides = (p)=>{
      if(boxA&&boxB){
        const collision = Matter.SAT.collides(boxA.body, boxB.body);

        if (collision.collided) {
          const x = (boxA.body.position.x+(Math.abs(boxA.body.position.x-boxB.body.position.x)/2));
          const y = (boxA.body.position.y+boxB.body.position.y)/2;
          const vectorW = boxA.velocityW+(boxA.velocityW||30);

          boxB.showVelocity=false;
          boxA.showVelocity=false;
          p.push()
          p.noStroke();
          p.fill('#ffffff');
          p.translate(x,y)
          p.rect(0,0, vectorW, 4);
          if(vectorW>0)p.triangle( vectorW, -8, vectorW, 10,vectorW+10, 0);
          if(vectorW<0)p.triangle( vectorW, -8, vectorW, 10,vectorW-10, 0);
          p.pop();
        }else{
          boxB.showVelocity=true;
          boxA.showVelocity=true;
        }
      }
    }
    
  };