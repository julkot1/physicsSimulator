import Panel from "./collisionPanel";
import P5Wrapper from "react-p5-wrapper";
import useData from "../../useData";
import '../sketch.css'
import {Fade} from "react-reveal";
import collisionSketch from "../../p5/sketches/collisionSketch";
export default ()=>{
    const [data, setData] = useData({
      massA: 5,
      massB: 5,
      velocityA: 0,
      velocityB: 0,
      play: false
    });

    
    return <div className="sketch">
      <div style={{  marginTop: '20px'}}><Fade left><P5Wrapper sketch={collisionSketch} data={data}></P5Wrapper></Fade></div>
      <Panel d={data} set={setData}></Panel>
      
    </div>;
  }