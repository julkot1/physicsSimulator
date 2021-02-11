import React, {useState} from 'react'
import {Donut}  from 'react-dial-knob'
import {background} from "../colors";
import './panel.css'
export default ({text, color, min, bgColor, max}) => {
    const [value, setValue] = useState(0)
    return <div className="knob-container">
        <label>{text}</label>
        <Donut
        diameter={200}
        min={min||0}
        max={max||100}
        step={1}
        value={value} 
 
        theme={{
            donutColor:  color,
            centerColor: background,
            centerFocusedColor: background,
            bgrColor: bgColor
        }}
        onValueChange={setValue}
        ariaLabelledBy={'my-label'}
        style={{padding: 15}}
    >
    </Donut>
    </div>
   
}