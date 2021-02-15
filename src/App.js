import './App.css';
import SlopeSim from "./components/simulations/slope";
import SlopeCalc from "./components/calculators/slope";
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
         </Router>

       </div>
    </div>
    
  );
};
