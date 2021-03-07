import Body from "../body";
import Matter from "matter-js";
import PhysicEngine from "../physicEngine";
import {background, background2} from "../../colors";
export default  (p) => {
    const w = 1000, h = 320;
    let e, play;
    let boxA,boxB;
    const velocityVec = b=>{
      const {x,y} = b.velocity;
      let v = Math.sqrt(x*x+y*y)*4
      if(v<0.09)v=0
      if(v!=0)v+=40;
      return Math.round(v*x/Math.abs(x)*100)/100;
    }
    const create = (data)=>{
     
      boxA = new Body(100, h, {bg: '#0087fc', body: {restitution: 0, inertia: Infinity}, data:{mass: data?data.massA:5}});
      boxB = new Body(w-100, h, {bg: '#509C2F', body: {restitution: 0, inertia: Infinity}, data:{mass:data?data.massB:5}});
      e = new PhysicEngine(w,h, {boxA, boxB}, p.canvas);
      boxA.addVector('#ffffff', velocityVec);
      boxB.addVector('#ffffff',  velocityVec);

    }
    p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
      play = data.play
      if(boxA){
        if(data.play)e.play()
        else{
          e.restart();
          create(data)
  
          boxA.setBaseVelocity({x:data.velocityA, y: 0});
     
          boxB.setBaseVelocity({x:-data.velocityB, y: 0});
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
      if(play){
        e.update(p.deltaTime)
      }
      collides(p)


    };
    const collides = (p)=>{
      if(boxA&&boxB){
        const collision = Matter.SAT.collides(boxA.body, boxB.body);

        if (collision.collided) {
          const length = boxA.vectors[0].lenght;
          const x = (boxA.body.position.x+(Math.abs(boxA.body.position.x-boxB.body.position.x)/2));
          const y = (boxA.body.position.y+boxB.body.position.y)/2;
          const vectorW = length+(length||30);
          boxB.params.drawVelocity=false;
          boxB.vectors[0].show=false;
          boxA.vectors[0].show=false;
          p.push()
          p.noStroke();
          p.fill('#ffffff');
          p.translate(x,y)
          p.rect(0,0, vectorW, 4);
          if(vectorW>0)p.triangle( vectorW, -8, vectorW, 10,vectorW+10, 0);
          if(vectorW<0)p.triangle( vectorW, -8, vectorW, 10,vectorW-10, 0);
          p.pop();
        }else{
          boxB.vectors[0].show=true;
          boxA.vectors[0].show=true;
          boxB.params.drawVelocity=true;
        }
      }
    }
    
  };