import Body from "../body";
import Ground from "../ground";
import PhysicEngine from "../physicEngine";
import {background, background2} from "../../colors";
export default  (p) => {
    const w = 1000, h = 320;
    let e;
    let boxA;
    const create = (data)=>{
     
      boxA = new Body(40, h, {body:{inertia: Infinity}},data||{mass: 5});
      e = new PhysicEngine(w,h, {boxA}, p.canvas)

    }
    p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
      if(boxA){
        if(data.play)e.play()
        else{
          e.restart();
          create(data);
          boxA.showVelocity=false
          boxA.setFriction(data)
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