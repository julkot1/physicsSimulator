import P5Wrapper from "react-p5-wrapper";
import Body from "../p5/body";
import Ground from "../p5/ground";
import useData from "../useData";
import PhysicEngine from "../p5/physicEngine";
import {background, background2} from "../colors";
import Panel from "./panel";
import './sketch.css'
import {Fade} from "react-reveal";
import { useState } from "react";

let maxV = 0;
const sketch = (p) => {
  const w = 1000, h = 350;
  const ang =  20*Math.PI/180;
 
  const boxA = new Body(-240-w/5, h-Math.sin(ang)*w-25, {});

  const H = Math.sin(ang)*w/2;
  const slope = new Ground(Math.sqrt(w/4-H)/2, h-(H/2), w/2, 10, {angle: ang},background2);
  
  let e;
  p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
    
    const angle = data.slope*Math.PI/180;
    slope.setSlopeAngle(angle, w, h,e);
    boxA.setPositionFromAngle(angle, h, w);
    boxA.setData(data);
    if(data.play)e.play()
    
  }
  
  p.setup =  ()=>{
    p.createCanvas(w, h);
    e = new PhysicEngine(w,h, {boxA, slope}, p.canvas)
    slope.setSlopeAngle(ang, w, h, e);
    boxA.setPositionFromAngle(ang, h, w);
  };
  
  p.draw = ()=>{
    p.background(p.color(background));
    e.show(p)
    const v = Math.sqrt(Math.pow(boxA.body.velocity.x,2)+Math.pow(boxA.body.velocity.y,2));
    
  };
  
};
export default ()=>{
  const [data, setData] = useData({
    veliocity: 0,
    mass: 5,
    slope: 20,
    friction: 0,
    play: false
  });


  return <div className="sketch">
    

    <Fade top><P5Wrapper sketch={sketch} data={data}></P5Wrapper></Fade>
    <Panel d={data} set={setData}>
     
    </Panel>
  </div>;
}