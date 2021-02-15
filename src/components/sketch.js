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
 
 
  
  let e;
  let boxA;
  let slope;
  const slopeH = 10;
  const create = ()=>{
    const ang =  20*Math.PI/180;
    const H = Math.sin(ang)*w/2;
    boxA = new Body(-240-w/5, h-Math.sin(ang)*w-25, {});
    slope = new Ground(Math.sqrt(w/4-H)/2, h-(H/2), w/2, slopeH, {angle: ang},background2);
    e = new PhysicEngine(w,h, {boxA, slope}, p.canvas)

    slope.setSlopeAngle(ang, w, h, e);
    boxA.setPositionFromAngle(ang, h, w, slopeH);
  }
  p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
    if(slope&&boxA){
      
      if(data.play)e.play()
      else{
        e.restart();
        create();
        const angle = data.slope*Math.PI/180;
        slope.setSlopeAngle(angle, w, h,e);
        boxA.setPositionFromAngle(angle, h, w, slopeH);
        boxA.setData(data);
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
export default ()=>{

  const [data, setData] = useData({
    force: 0,
    mass: 5,
    slope: 20,
    friction: 0,
    play: false,
  });

  return <div className="sketch">
    <div style={{  margin: '40px'}}><Fade left><P5Wrapper sketch={sketch} data={data}></P5Wrapper></Fade></div>
    
    <Panel d={data} set={setData}>
     
    </Panel>
  </div>;
}