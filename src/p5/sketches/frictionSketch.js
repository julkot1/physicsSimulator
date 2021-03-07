import Body from "../body";
import PhysicEngine from "../physicEngine";
import {background, background2} from "../../colors";
import Matter, {Vector} from "matter-js";
export default  class FrictionSketch{
  constructor(set){
    this.set = set;
  }
  sketch(p) {
    const w = 1000, h = 320;
    let e, play;
    let boxA;
    const create = (dataD)=>{
     
      boxA = new Body(100, h, { body: {restitution: 0, inertia: Infinity}, data: dataD||{mass: 5}});
      boxA.addVector(background2, (b)=>{
        const {x,y} = b.velocity;
        let v = Math.sqrt(x*x+y*y)*4
        if(v<0.09)v=0
        if(v!=0)v+=40;
        return Math.round(v*x/Math.abs(x)*100)/100;
      })
      e = new PhysicEngine(w,h, {boxA}, p.canvas)
    }
    
    p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
      if(boxA){
        play=data.play;
        if(data.play){
          e.play();
          time=0;         
        }
        else{
          e.restart();
          create(data);
        }
      }
    }
    p.setup =  ()=>{
      p.createCanvas(w, h);
      create()
     
    };
    let time =0, t=0;
    p.draw = ()=>{
     
      p.background(p.color(background));

      if(boxA&&play){
        if(play){
          boxA.acceleration()
          e.update(p.deltaTime)
        }
       
      }
      e.show(p);
 
    
  }
}
}