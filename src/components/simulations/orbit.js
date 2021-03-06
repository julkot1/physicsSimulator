import P5Wrapper from "react-p5-wrapper";
import useData from "../../useData";
import Panel from "./orbitPanel";
import '../sketch.css'
import {Fade} from "react-reveal";
import slopeSketch from "../../p5/sketches/orbitSketch";
import { useState } from "react";
export default ()=>{

  const [data, setData] = useData({
    radius: 4.68,
    mass: 5.97,
    play: false,
  });

  const [s, setS] = useState([{
    name: 'v(t)',
    data: [{x: 0, y: 0}]
  }]);
  const setChart = (val) => {setS([{
    name: 'v(t)',
    data: [...s, val]
  }]); console.log(val);};
  return <div className="sketch">
    <div style={{  marginTop: '20px'}}><Fade left><P5Wrapper sketch={slopeSketch} data={data} set={setChart}></P5Wrapper></Fade></div>
    
    <Panel d={data} set={setData}>
    
    </Panel>
  </div>;
}
