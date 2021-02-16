import Panel from "./frictionPanel";
import P5Wrapper from "react-p5-wrapper";
import useData from "../../useData";
import '../sketch.css'
import {Fade} from "react-reveal";
import frictionSketch from "../../p5/sketches/frictionSketch";
export default ()=>{
    const [data, setData] = useData({
      force: 0,
      mass: 5,
      friction: 0,
      frictionStatic: 0,
      play: false,
    });
    
   
    
    return <div className="sketch">
      <div style={{  marginTop: '20px'}}><Fade left><P5Wrapper sketch={frictionSketch} data={data}></P5Wrapper></Fade></div>
       <Panel d={data} set={setData}></Panel>
      
    </div>;
  }