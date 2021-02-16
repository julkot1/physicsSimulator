import './App.css';
import SlopeSim from "./components/simulations/slope";
import FrictionSim from "./components/simulations/friction";
import CollisionSim from "./components/simulations/collision";
import SlopeCalc from "./components/calculators/slope";
import FrictionCalc from "./components/calculators/friction";
import CollisionCalc from "./components/calculators/collision";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route} from "react-router-dom";
export default () =>{

  return (
    <div  id="outer-container">
        <Navbar/>
       <div className="App" id="page-wrap">
         <Router>
            <Route exact component={SlopeSim} path="/slope"></Route>
            <Route exact component={SlopeCalc} path="/slope-calc"></Route>
            <Route exact component={FrictionSim} path="/friction"></Route>
            <Route exact component={FrictionCalc} path="/friction-calc"></Route>
            <Route exact component={CollisionSim} path="/collision"></Route>
            <Route exact component={CollisionCalc} path="/collision-calc"></Route>
         </Router>

       </div>
    </div>
    
  );
};
