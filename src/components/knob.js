import React, {useState} from 'react'
import {Donut}  from 'react-dial-knob'
import {background} from "../colors";
import './panel.css'
export default (props) => {
    const theme = {
        donutColor: '#0087fc',
        centerColor: background,
        centerFocusedColor: background,
        bgrColor: '#17659C',
        
    };
    const {value, setValue,name,text, min, max,step, children} = props;

    return <div className="knob-container">
        <div>{children}</div>
        <Donut
        spaceMaxFromZero={false}
        diameter={200}
        min={min||0}
        max={max||100}
        step={step||1}
        value={value}
        theme={theme}
        onValueChange={x=>setValue(name,x)}
        ariaLabelledBy={'my-label'}
        style={{padding: 15}}>
        </Donut>
    </div>
   
}