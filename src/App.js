import './App.css';
import Matter from "matter-js";
import Sketch from "./components/sketch";
import Knob from "./components/knob";
import Body from "./p5/body";

/*
 <div className="knobs">
          <Knob color='red' text="body A velocity" bgColor="#aa2c34"/>
          <Knob color='green' text="body A mass" min={2} bgColor="#27aa34"/>
        </div>
*/
export default () =>{

 

  return (
    <div className="App">
      
     <Sketch></Sketch>
    </div>
  );
};
