import React, { useState } from 'react'
import "./panel.css"
import Knob from "./knob";
export default () => {
 
    return(
        <div className="panel">
            <Knob color='red' text="velocity" bgColor="#aa2c34"/>
            <Knob color='green' text="mass" min={2} bgColor="#27aa34"/>
            <Knob color='green' text="slope" min={0} bgColor="#27aa34" max={60}/>
            <Knob color='green' text="friction" min={0} bgColor="#27aa34" max={60}/>
        </div>
    );
}