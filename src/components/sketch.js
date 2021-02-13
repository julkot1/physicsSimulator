import P5Wrapper from "react-p5-wrapper";
import Body from "../p5/body";
import Ground from "../p5/ground";
import useData from "../useData";
import PhysicEngine from "../p5/physicEngine";
import {background, background2} from "../colors";
import Panel from "./panel";
import './sketch.css'


const sketch = (p) => {
  const w = 1000, h = 300;
  const ang =  20*Math.PI/180;
 
  const boxA = new Body(-240-w/5, h-Math.sin(ang)*w-25);
  const slope = new Ground(-w/2, h/2, w/2, 10, {angle: ang}, background2);
  
  let e;
  p.myCustomRedrawAccordingToNewPropsHandler = ({data}) => {
    
    const angle = data.slope*Math.PI/180;
    slope.setSlopeAngle(angle,h);

    boxA.setPositionFromAngle(angle, 80, w);
    
  }
  
  p.setup =  ()=>{
    p.createCanvas(w, h);

    e=new PhysicEngine(w,h, {boxA, slope}, p.canvas)
    e.bodies.slope.setSlopeAngle(ang);
  };

  p.draw = ()=>{
    p.background(p.color(background));
    e.show(p)
  };
  
};
export default ()=>{
  const [data, setData] = useData({
    veliocity: 0,
    mass: 5,
    slope: 20,
    friction: 0,
  });
  return <div className="sketch">
    <P5Wrapper sketch={sketch} data={data}></P5Wrapper>
    <Panel d={data} set={setData}></Panel>
  </div>;
}