import Body from "../body";
import Ground from "../ground";
import PhysicEngine from "../physicEngine";
import {background, background2} from "../../colors";
import Matter from "matter-js";
export default  (p) => {
    const w = 1000, h = 320;
    let e;
    let boxA;
    let slope;
    const slopeH = 10;
    const create = (data)=>{
      const ang =  20*Math.PI/180;
      const H = Math.sin(ang)*w/2;
  

      boxA = new Body(-240-w/5, h-Math.sin(ang)*w, {},data||{mass:5});
      boxA.showVelocity=false;
      slope = new Ground(Math.sqrt(w/4-H)/2, h-(H/2), w/2, slopeH, {angle: ang},background2);
      e = new PhysicEngine(w,h, {boxA, slope}, p.canvas)
      boxA.rotate(ang);
      slope.setSlopeAngle(ang, w, h, e);
      boxA.setPositionFromAngle(ang, h, w, slopeH);
    }
    p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
      if(slope&&boxA){
        
        if(data.play)e.play()
        else{
          e.restart();
          create(data);
          const angle = data.slope*Math.PI/180;
          slope.setSlopeAngle(angle, w, h,e);
          boxA.setPositionFromAngle(angle, h, w, slopeH);
          Matter.Body.applyForce(boxA.body, boxA.body.position,{y:  Math.sin(angle)*data.force/100, x: Math.cos(angle)*(data.force/100)})
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
    };
    
  };