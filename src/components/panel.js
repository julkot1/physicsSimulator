import React, { useState, useEffect } from 'react'
import "./panel.css"
import Knob from "./knob";
import {Fade} from "react-reveal";


export default ({d, set}) => {
    let data =d;
    const play = (e)=>{
        set('play',!d.play);
    }

    return(
        <Fade left>
            <div className="panel">
                <div className="play-container"> <button onClick={play}>{d.play?'Restart':'Start'}</button> </div>
                <div className="knobs">
                    <ul className="knobs-list" >
                        <li><Knob value={d.veliocity} setValue={d.play?()=>{}:set} name="veliocity" text="Prędkość" max={10} step={0.5}></Knob></li>
                        <li><Knob value={d.mass} setValue={d.play?()=>{}:set} name="mass" text="Masa" min={2} max={50}/></li>
                        <li><Knob value={d.slope} setValue={d.play?()=>{}:set} name="slope" text="Nachylenie" min={0}  max={30}/></li>
                        <li><Knob value={d.friction} setValue={d.play?()=>{}:set} name="friction" text="Tarcie" /></li>
                    </ul>   
                   
                </div>
            </div>
        </Fade>
       
    );
}
