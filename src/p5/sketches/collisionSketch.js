import Body from "../body";
import Ground from "../ground";
import PhysicEngine from "../physicEngine";
import {background, background2} from "../../colors";
export default  (p) => {
    const w = 1000, h = 320;
    let e;
    let boxA,boxB;
    const create = ()=>{
     
      boxA = new Body(100, h-25, {bg: '#0087fc'});
      boxB = new Body(w-100, h-25, {bg: '#509C2F'});
      e = new PhysicEngine(w,h, {boxA, boxB}, p.canvas)

    }
    p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
      if(boxA){
        if(data.play)e.play()
        else{
          e.restart();
          create();
  
          boxA.setData({mass: data.massA});
          boxA.setVelocity({x:data.velocityA, y: 0});
     
          boxB.setData({mass: data.massB});
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
      e.show(p)
    };
    
  };