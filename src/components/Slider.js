import React, {useState} from 'react'
import Slider from 'react-input-slider';
import './panel.css'
export default (props) => {

    const {value, setValue,name,text, min, max,step, children} = props;
    return <div className="slider-container">
        <div>{children}<div className="slider-value">{parseFloat(value.toFixed(2))}{text}</div></div>
        <Slider
        axis="x"
        xstep={step}
        xmin={min}
        xmax={max}
        x={value}
        styles={{
            track:{ backgroundColor: props.bg?props.bg:'#17659C'},
            active: {backgroundColor:  props.color?props.color:'#0087fc'}
        }}
        onChange={({ x }) => setValue(parseFloat(x))}
         />
       
    </div>
   
}
/*
 <Donut
        spaceMaxFromZero={false}
        diameter={180}
        min={min||0}
        max={max||100}
        step={step||1}
        value={value}
        theme={theme}
        onValueChange={x=>setValue(x)}
        style={{padding: 15}}>
        </Donut>
*/