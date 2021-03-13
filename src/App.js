import './App.css';
import OrbitSim from "./components/simulations/orbit";
import FrictionSim from "./components/simulations/friction";
import CollisionSim from "./components/simulations/collision";
import OrbitCalc from "./components/calculators/orbit";
import FrictionCalc from "./components/calculators/friction";
import CollisionCalc from "./components/calculators/collision";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useState } from 'react';
export default () =>{
  const options = {
    chart: {
      id: 'apexchart-example',
      type: 'line'
    },
  
  }
  const [s, setS] = useState([{
    name: 'series-1',
    data: [{x: 0, y: 1},{x: 0.5, y: 6},{x: 1, y: 7},{x: 1.5, y: 6},{x: 2, y: 4}]
  }]);
  /*
   <button onClick={()=>{setS([{
    name: 'series-1',
    data: [...s[0].data, {x: 0.5, y: 6}]
  }])}}>sdsd</button>
       <Chart options={options} series={s}  width={500} height={320} />
  */
  return (
    <div  id="outer-container">
        <Navbar/>
       <div className="App" id="page-wrap">
        
         <Router>
            <Route exact component={OrbitSim} path="/orbit"></Route>
            <Route exact component={OrbitCalc} path="/orbit-calc"></Route>
            <Route exact component={FrictionSim} path="/friction"></Route>
            <Route exact component={FrictionCalc} path="/friction-calc"></Route>
            <Route exact component={CollisionSim} path="/collision"></Route>
            <Route exact component={CollisionCalc} path="/collision-calc"></Route>
         </Router>

       </div>
    </div>
    
  );
};
