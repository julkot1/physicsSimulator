import P5Wrapper from "react-p5-wrapper";
import useData from "../../useData";
import Panel from "./slopePanel";
import '../sketch.css'
import {Fade} from "react-reveal";
import slopeSketch from "../../p5/sketches/slopeSketch";

export default ()=>{

  const [data, setData] = useData({
    force: 0,
    mass: 5,
    slope: 20,
    friction: 0,
    play: false,
  });

  return <div className="sketch">
    <div style={{  marginTop: '20px'}}><Fade left><P5Wrapper sketch={slopeSketch} data={data}></P5Wrapper></Fade></div>
    
    <Panel d={data} set={setData}>
     
    </Panel>
  </div>;
}