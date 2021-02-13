import React, { useState } from 'react'
import "./panel.css"
import Knob from "./knob";
import {Fade} from "react-reveal";
import Chart from "./chart";


export default ({d, set, children}) => {
    const [simMode, setSimMode] = useState(true);
    const play = (e)=>{
        setSimMode(!simMode);
    
        if(simMode){
            set('play',!d.play);
        }else{
            console.log("sdsd");
        }
    }
    return(
        <Fade left>
            <div className="panel">
                <div className="play-container"> <button onClick={play}>{simMode?'Start':'Restart'}</button> </div>
                <div className="knobs">
                    {
                        simMode?
                        <ul className="knobs-list" >
                            <li><Knob value={d.veliocity} setValue={set} name="veliocity" text="Prędkość" max={10} step={0.5}></Knob></li>
                            <li><Knob value={d.mass} setValue={set} name="mass" text="Masa" min={2} max={50}/></li>
                            <li><Knob value={d.slope} setValue={set} name="slope" text="Nachylenie" min={0}  max={30}/></li>
                            <li><Knob value={d.friction} setValue={set} name="friction" text="Tarcie" /></li>
                        </ul>   
                    :
                        <Chart></Chart>
                    }
                   
                    
                </div>
            </div>
        </Fade>
       
    );
}
