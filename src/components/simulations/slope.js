import P5Wrapper from "react-p5-wrapper";
import useData from "../../useData";
import Panel from "./slopePanel";
import '../sketch.css'
import {Fade} from "react-reveal";
import slopeSketch from "../../p5/sketches/slopeSketch";
import { useState } from "react";
import Chart from 'react-apexcharts'
export default ()=>{
  const options = {
    chart: {
      id: 'apexchart-example',
      type: 'realtime'
    },
  
  }
  const [data, setData] = useData({
    force: 0,
    mass: 5,
    slope: 20,
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
    <Chart options={options} series={s}  width={500} height={320} />
  </div>;
}
