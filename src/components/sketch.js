import P5Wrapper from "react-p5-wrapper";
import Body from "../p5/body";
import Ground from "../p5/ground";
import PhysicEngine from "../p5/physicEngine";


export default ()=>{
    
    const sketch = (p) => {
        const w = 1000, h = 400;
        let rotation = 0;
        const ang =  Math.PI/4;
        const boxA = new Body(-250-w/5, -Math.tan(ang)*200+50);
        const slope = new Ground(-200, h/2, w, 20, {angle: ang});
        
        const e = new PhysicEngine(w,h, {boxA, slope});
   
        p.setup =  ()=>{
          p.createCanvas(w, h, p.WEBGL);
          e.bodies.slope.setSlopeAngle(ang)
        };
      
        p.draw = ()=>{
          p.background(100);
          e.show(p)
    
          
        };
      };
    return <P5Wrapper sketch={sketch}></P5Wrapper>;
}