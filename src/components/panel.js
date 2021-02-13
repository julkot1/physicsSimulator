import React, { useState } from 'react'
import "./panel.css"
import Knob from "./knob";
import useData from "../useData"


export default ({d, set}) => {
    return(
        <div className="panel">
          
            <Knob value={d.veliocity} setValue={set} name="veliocity" text="prędkość"><p>sddsdsd</p><p>ssdsdqddsdsd</p></Knob>
            <Knob value={d.mass} setValue={set} name="mass" text="masa" min={2} />
            <Knob value={d.slope} setValue={set} name="slope" text="spadek" min={0}  max={30}/>
            <Knob value={d.friction} setValue={set} name="friction" text="tarcie" min={0} />
        </div>
    );
}
