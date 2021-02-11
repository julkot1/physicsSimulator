import P5Wrapper from "react-p5-wrapper";
import Body from "../p5/body";
import Ground from "../p5/ground";
import PhysicEngine from "../p5/physicEngine";
import {background, background2} from "../colors";
import Panel from "./panel";
import './sketch.css'
export default ()=>{
    
    const sketch = (p) => {
        const w = 1000, h = 300;

        const ang =  Math.PI*0.06;
        const boxA = new Body(-250-w/5, Math.sin(ang)*w-130);
        const slope = new Ground(0, h/2, w, 10, {angle: ang}, background2);
        
        let e;
   
        p.setup =  ()=>{
          p.createCanvas(w, h, p.WEBGL);

          e=new PhysicEngine(w,h, {boxA, slope}, p.canvas)
          e.bodies.slope.setSlopeAngle(ang);
        };
      
        p.draw = ()=>{
          p.background(p.color(background));
          e.show(p)
    
          
        };
      };
    return <div className="sketch">
      <P5Wrapper sketch={sketch}></P5Wrapper>
      <Panel></Panel>
    </div>;
}