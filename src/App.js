import './App.css';
import Sketch from "./components/simulations/slope";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route} from "react-router-dom";
export default () =>{

 

  return (
    <div  id="outer-container">
        <Navbar/>
       <div className="App" id="page-wrap">
         <Router>
            <Route exact component={Sketch} path="/slope"></Route>
         </Router>

       </div>
    </div>
    
  );
};
