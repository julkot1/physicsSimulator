import Body from "../body";
import Ground from "../ground";
import PhysicEngine from "../physicEngine";
import {background, background2} from "../../colors";
import Matter from "matter-js";
export default  (p) => {
    const w = 1000, h = 320;
    let e,play;
    let boxA;
    let slope, setV;
    const slopeH = 10;
    const create = (data)=>{
      const ang =  20*Math.PI/180;
      const H = Math.sin(ang)*w/2;
      
      boxA = new Body(-240-w/5, h-Math.sin(ang)*w, {bg:'#ffffff',data: data||{mass:5, restitution: 0}});
      slope = new Ground(Math.sqrt(w/4-H)/2, h-(H/2), w/2, slopeH, {angle: ang},background2);
      e = new PhysicEngine(w,h, {boxA, slope}, p.canvas)
      slope.setSlopeAngle(ang, w, h, e);
      boxA.setPositionFromAngle(ang, h, w, slopeH);
      boxA.addVector('#0087fc', (d,params)=>params.force*4+(params.force>0?10:0))
    }
    p.myCustomRedrawAccordingToNewPropsHandler = ({data,set}) => {
      if(slope&&boxA){
        play = data.play;
        setV = set;
        if(!data.play){
          e.restart();
          create(data);
          const angle = data.slope*Math.PI/180;
          slope.setSlopeAngle(angle, w, h,e);
          boxA.setPositionFromAngle(angle, h, w, slopeH);
         
        }
      }
     
    
    }
    
    p.setup =  ()=>{
      p.createCanvas(w, h);
      create()
     
    };
    let time = 0, s=0;
    p.draw = ()=>{
      if(play){
        time+=p.deltaTime;
        if(time>100){
          s++;
          const c = {x:s, y:Matter.Vector.magnitude(boxA.body.velocity).toFixed(2)};
          setV(c);
          time=0;
        }
        boxA.acceleration();
        e.update(p.deltaTime);
      }
      p.background(p.color(background));
      e.show(p);
    };
    
  };